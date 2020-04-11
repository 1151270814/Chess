<template>
  <div class="box">
    <h1>-- 五子棋 --</h1>
    <canvas ref="canvas" width="450" height="450" @click="chessClick"></canvas>
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
      over: false //标记游戏是否结束
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
      let { context } = this;
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
      let { chessBoard, wins, count } = this;
      //二维数组标记棋盘是否下有棋子
      for (let i = 0; i < 15; i++) {
        chessBoard[i] = [];
        for (let j = 0; j < 15; j++) {
          chessBoard[i][j] = 0;
        }
      }
      /*
        赢法数组
        i是y轴
        j是x轴
      */
      for (let i = 0; i < 15; i++) {
        wins[i] = [];
        for (let j = 0; j < 15; j++) {
          wins[i][j] = [];
        }
      }
      /*横线的赢法
        4个格子不能算赢，要去掉4个就是11
        i是y轴
        j是x轴
        k是找5个点
      */
      for (let i = 0; i < 15; i++) {
        for (let j = 0; j < 11; j++) {
          for (let k = 0; k < 5; k++) {
            wins[i + k][j + k][count] = true;
          }
          count++;
        }
      }
      //竖线的赢法
      for (let i = 0; i++; i < 15) {
        for (let j = 0; j < 11; j++) {
          for (let k = 0; k < 5; k++) {
            wins[j + k][i][count] = true;
          }
          count++;
        }
      }
      //正斜线的赢法
      for (let i = 0; i < 11; i++) {
        for (let j = 0; j < 11; j++) {
          for (let k = 0; k < 5; k++) {
            wins[i + k][j + k][count] = true;
          }
          count++;
        }
      }
      //反斜线的赢法
      for (let i = 0; i < 11; i++) {
        for (let j = 14; j > 3; j--) {
          for (let k = 0; k < 5; k++) {
            wins[i + k][j - k][count] = true;
          }
          count++;
        }
      }
    },

    //落子
    chessClick(e) {
      let { me, chessBoard, onStep, over } = this;
      //如果游戏结束是不可以下棋
      if (over) {
        return;
      }

      if (!me) {
        return;
      }
      let ox = e.offsetX;
      let oy = e.offsetY;
      //取整
      let i = Math.floor(ox / 30);
      let j = Math.floor(oy / 30);

      if (chessBoard[i][j] == 0) {
        onStep(i, j, me);
        if (me) {
          chessBoard[i][j] = 1;
        } else {
          chessBoard[i][j] = 2;
        }
        this.me = !me;
      }
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
</style>