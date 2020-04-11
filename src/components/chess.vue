<template>
  <div class="box">
    <h1>-- 五子棋 --</h1>
    <canvas ref="canvas" width="450" height="450" @click="chessClick"></canvas>
    <div class="buttonGroup">
      <div class="restart" @click="restart">
        <span>重新开始</span>
      </div>

      <div class="revert">
        <span>悔棋</span>
      </div>
      <div class="removeRevert">
        <span>撤销悔棋</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      chess: {},
      context: {},
      me: true, //标记人是否可以下棋
      chessBoard: [], // 记录是否走过
      wins: [], // 赢法数组
      count: 0, // 所有赢法数量的编号
      over: false, //标记游戏是否结束
      blackWin: [], //黑棋的的数组
      whiteWin: [] //白棋赢的数组
    };
  },
  computed: {},
  watch: {},
  methods: {
    //   初始化
    init() {
      this.chess = this.$refs.canvas;
      this.context = this.chess.getContext("2d");
      this.drawChessBoard();
      this.fillArray();
    },
    //   画棋盘
    drawChessBoard() {
      let { context } = this;
      context.strokeStyle = "#bfbfbf";
      for (let i = 0; i < 15; i++) {
        //   画竖线
        context.moveTo(15 + i * 30, 15);
        context.lineTo(15 + i * 30, 435);
        context.stroke(); // 描边
        // 画横线
        context.moveTo(15, 15 + i * 30);
        context.lineTo(435, 15 + i * 30);
        context.stroke();
      }
    },
    onStep(i, j, me) {
      const { context } = this;
      context.beginPath();
      //画圆 (0, 2 * Math.PI)==>0到2 PI 角度
      context.arc(15 + i * 30, 15 + j * 30, 13, 0, 2 * Math.PI);
      context.closePath();
      //渐变色  2个圆的参数 (15 + i * 30 + 2,15 + i * 30 - 2)==>圆的大小
      var gradient = context.createRadialGradient(
        15 + i * 30 + 2,
        15 + j * 30 - 2,
        13,
        15 + i * 30 + 2,
        15 + j * 30 - 2,
        0
      );
      if (me) {
        //黑棋
        gradient.addColorStop(0, "#0A0A0A"); //第1大圆
        gradient.addColorStop(1, "#636766"); //里面第2个圆
      } else {
        //白棋
        gradient.addColorStop(0, "#D1D1D1"); //第1大圆
        gradient.addColorStop(1, "#F9F9F9"); //里面第2个圆
      }
      context.fillStyle = gradient;
      context.fill(); // 填充
    },
    // 填充数组(赢法)
    fillArray() {
      //二维数组标记棋盘是否下有棋子
      for (let i = 0; i < 15; i++) {
        this.chessBoard[i] = [];
        for (let j = 0; j < 15; j++) {
          this.chessBoard[i][j] = 0;
        }
      }
      /*
        赢法数组
      */
      for (let i = 0; i < 15; i++) {
        this.wins[i] = [];
        for (let j = 0; j < 15; j++) {
          this.wins[i][j] = [];
        }
      }
      /*
        4个格子不能算赢，要去掉4个就是11
        i是y轴
        j是x轴
        k是找5个点
      */
      //横线的赢法
      for (let i = 0; i < 15; i++) {
        for (let j = 0; j < 11; j++) {
          for (let k = 0; k < 5; k++) {
            this.wins[i][j + k][this.count] = true;
          }
          this.count++;
        }
      }
      //竖线的赢法
      for (let i = 0; i++; i < 15) {
        for (let j = 0; j < 11; j++) {
          for (let k = 0; k < 5; k++) {
            this.wins[j + k][i][this.count] = true;
          }
          this.count++;
        }
      }
      //正斜线的赢法
      for (let i = 0; i < 11; i++) {
        for (let j = 0; j < 11; j++) {
          for (let k = 0; k < 5; k++) {
            this.wins[i + k][j + k][this.count] = true;
          }
          this.count++;
        }
      }
      //反斜线的赢法
      for (let i = 0; i < 11; i++) {
        for (let j = 14; j > 3; j--) {
          for (let k = 0; k < 5; k++) {
            this.wins[i + k][j - k][this.count] = true;
          }
          this.count++;
        }
      }
      // 赢法的统计数组
      for (let i = 0; i < this.count; i++) {
        this.blackWin[i] = 0;
        this.whiteWin[i] = 0;
      }
    },

    //落子
    chessClick(e) {
      //如果游戏结束是不可以下棋
      if (this.over) {
        return;
      }
      //   if (!this.me) {
      //     return;
      //   }
      let ox = e.offsetX;
      let oy = e.offsetY;
      //取整
      let i = Math.floor(ox / 30);
      let j = Math.floor(oy / 30);

      if (this.me) {
        if (this.chessBoard[i][j] == 0) {
          this.onStep(i, j, this.me);
          this.chessBoard[i][j] = 1; //黑子
          for (let k = 0; k < this.count; k++) {
            if (this.wins[i][j][k]) {
              this.blackWin[k]++;
              this.whiteWin[k] = 6; //这个位置对方不可能赢了
              if (this.blackWin[k] == 5) {
                window.alert("黑子赢了");
                this.over = true;
              }
            }
          }
        }
      } else {
        if (this.chessBoard[i][j] == 0) {
          this.onStep(i, j, this.me);
          this.chessBoard[i][j] = 2; //白子
          for (let k = 0; k < this.count; k++) {
            if (this.wins[i][j][k]) {
              this.whiteWin[k]++;
              this.blackWin[k] = 6;
              if (this.whiteWin[k] == 5) {
                window.alert("白子赢了");
                this.over = true;
              }
            }
          }
        }
      }
      if (!this.over) {
        this.me = !this.me;
        //悔棋的样式点亮
        // isLightBackground('revert', true);
      }
    },
    restart() {
      window.location.reload();
    }
  },
  created() {},
  mounted() {
    this.init();
  },
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {},
  activated() {}
};
</script>
<style  scoped>
canvas {
  border: 1px solid #ddd;
  margin: 20px auto;
  background: #fff;
  box-shadow: -2px 0 2px #efefef, 5px 5px 5px #b9b9b9;
}
.buttonGroup {
  width: 500px;
  margin: 10px auto;
  display: flex;
  justify-content: space-around;
}

.buttonGroup div:hover {
  cursor: pointer;
}

.restart {
  text-align: center;
  background-color: #45c01a;
  border-radius: 5px;
}

.revert,
.removeRevert {
  text-align: center;
  background-color: #b9b9b9;
  border-radius: 5px;
}

.restart > span,
.revert > span,
.removeRevert > span {
  display: inline-block;
  padding: 10px 20px;
  color: #fff;
}
</style>