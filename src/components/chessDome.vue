<template>
  <div class="box">
    <h1>-- 五子棋 --</h1>

    <div id="chess" class="chess" style="display:flex;">
      <div class="chessArea"></div>
    </div>
    <div class="buttonGroup">
      <div id="restart" class="restart" @click="restart()">
        <span>重新开始</span>
      </div>

      <div id="revert" class="revert" @click="revert()">
        <span>悔棋</span>
      </div>
      <div id="removeRevert" class="removeRevert" @click="removeRevert()">
        <span>撤销悔棋</span>
      </div>
    </div>
  </div>
</template>

<script>
import blackImg from "@/assets/black_flag.png";
import whiteImg from "@/assets/white_flag.png";
export default {
  components: {},
  data() {
    return {
      chess: {},
      count: 0, // 所有赢法数量的编号
      chessBoard: [], //棋盘
      wins: [], // 赢法数组
      blackWin: [], //黑棋的的数组
      whiteWin: [], //白棋赢的数组
      over: false, //标记游戏是否结束
      revertFlag: false, //默认悔棋
      i: 0,
      j: 0,
      //   id: 0,
      me: true
    };
  },
  computed: {},
  watch: {},
  methods: {
    //  初始化
    init() {
      this.drawChessBoard();
      this.initChess();
      this.fillArray();
    },
    //画棋盘
    drawChessBoard() {
      for (var i = 0; i < 15; i++) {
        this.chessBoard[i] = [];
        for (var j = 0; j < 15; j++) {
          this.chessBoard[i][j] = 0;
        }
      }
    },
    //画棋子
    drawChess(id, me) {
      if (me) {
        $("#" + id).css({
          backgroundImage: `url(${blackImg})`,
          backgroundSize: "28px",
          backgroundRepeat: "no-repeat"
        });
      } else {
        $("#" + id).css({
          backgroundImage: `url(${whiteImg})`,
          backgroundSize: "28px",
          backgroundRepeat: "no-repeat"
        });
      }
    },
    //删除棋子
    removeChess(id) {
      console.log(id);
      $("#" + id).css("backgroundImage", "none");
    },

    //撤回按钮的颜色
    isLightBackground(id, isLight) {
      var color = document.getElementById(id);
      if (isLight) {
        color.style.backgroundColor = "#45c01a";
      } else {
        color.style.backgroundColor = "#b9b9b9";
      }
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
    //计算赢的数据组
    chessAreaItemClick(e) {
      this.id = e.target.id;//dom节点原生传递id
      if (this.over) {
        return;
      }
      this.drawChess(this.id, this.me);
      this.j = this.id.split("-")[0];
      this.i = this.id.split("-")[1];
      if (this.me) {
        if (this.chessBoard[this.i][this.j] == 0) {
          this.chessBoard[this.i][this.j] = 1; //黑子
          console.log(this.chessBoard[this.i][this.j])
          for (var k = 0; k < this.count; k++) {
            if (this.wins[this.i][this.j][k]) {
              this.blackWin[k]++;
              this.whiteWin[k] = 6; //这个位置对方不可能赢了
              if (this.blackWin[k] == 5) {
                window.alert("黑子赢了");
                this.over = true;
                this.isLightBackground("revert", false);
                this.isLightBackground("removeRevert", false);
              }
            }
          }
        }
      } else {
        if (this.chessBoard[this.i][this.j] == 0) {
          this.chessBoard[this.i][this.j] = 2; //白子
          console.log(this.chessBoard[this.i][this.j])
          for (let k = 0; k < this.count; k++) {
            if (this.wins[this.i][this.j][k]) {
              this.whiteWin[k]++;
              this.blackWin[k] = 6;
              if (this.whiteWin[k] == 5) {
                window.alert("白子赢了");
                this.over = true;
                this.isLightBackground("revert", false);
                this.isLightBackground("removeRevert", false);
              }
            }
          }
        }
      }
      if (!this.over) {
        this.me = !this.me;
        //悔棋的样式点亮
        this.isLightBackground("revert", true);
      }
    },
    //悔棋事件
    revert() {
      if (!this.over && !this.revertFlag) {
        this.removeChess(this.id);
        console.log(this.id);
        this.chessBoard[this.i][this.j] = 0;
        if (!this.me) {
          for (var k = 0; k < this.count; k++) {
            if (this.wins[this.i][this.j][k]) {
              this.blackWin[k]--;
            }
          }
        } else {
          for (let k = 0; k < this.count; k++) {
            if (this.wins[this.i][this.j][k]) {
              this.whiteWin[k]--;
            }
          }
        }
        this.me = !this.me;
        this.revertFlag = true;
        //撤销悔棋的样式点亮，悔棋样式disabled
        this.isLightBackground("revert", false);
        this.isLightBackground("removeRevert", true);
      }
    },

    //撤销悔棋事件
    removeRevert() {
      console.log(this.id);
      if (!this.over && this.revertFlag) {
        if (this.me) {
          if (this.chessBoard[this.i][this.j] == 0) {
            this.drawChess(this.id, this.me);
            this.chessBoard[this.i][this.j] = 1; //黑子
            for (var k = 0; k < this.count; k++) {
              if (this.wins[this.i][this.j][k]) {
                this.blackWin[k]++;
              }
            }
          }
        } else {
          if (this.chessBoard[this.i][this.j] == 0) {
            this.drawChess(this.id, this.me);
            this.chessBoard[this.i][this.j] = 2; //白子
            for (let k = 0; k < this.count; k++) {
              if (this.wins[this.i][this.j][k]) {
                this.whiteWin[k]++;
              }
            }
          }
        }
        if (!this.over) {
          this.me = !this.me;
        }
        this.revertFlag = false;

        //悔棋的样式点亮，撤销悔棋样式disabled
        this.isLightBackground("revert", true);
        this.isLightBackground("removeRevert", false);
      }
    },

    //添加棋盘格子
    initChess() {
      let $tbody = $(".chessArea").append(
        '<table cellspacing="0px"><tbody></tbody></table>'
      );
      for (var i = 0; i < 15; i++) {
        var $tr = $tbody.append("<tr></tr>");
        for (var j = 0; j < 15; j++) {
          $tr.append(
            '<td  class="chessAreaItem" style=" width: 30px;  height: 30px;border: 1px solid #0a0a0a;" id=' +
              i +
              "-" +
              j +
              "></td>"
          );
        }
      }
    },
    //重新开始
    restart() {
      window.location.reload();
    }
  },
  created() {},
  mounted() {
    this.init();
    this.$nextTick(() => {
      // 动态添加dom元素，并绑定VUE事件（.chessAreaItem为动态添加的元素，放置在父元素.chessArea下）
      $(".chessArea").on("click", ".chessAreaItem", this.chessAreaItemClick);
    });
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
div#chess {
  width: 480px;
  height: 480px;
  padding: 0px;
  margin: 10px auto 0px auto;
  box-shadow: -2px -2px 2px #efefef, 5px 5px 5px #b9b9b9;
}

div.chessArea {
  display: block;
  width: 480px;
  height: 480px;
  padding: 0px;
  background: burlywood;
}

td.chessAreaItem {
  width: 30px;
  height: 30px;
  box-sizing: border-box;
  margin: 0px;
  top: 0px;
  bottom: 0px;
  border: 1px solid #0a0a0a;
}

.buttonGroup {
  width: 500px;
  margin: 20px auto;
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