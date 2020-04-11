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
      me: true,
      chessBoard: []
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
      //初始化点击状态
      for (let i = 0; i < 15; i++) {
        this.chessBoard[i] = [];
        for (let j = 0; j < 15; j++) {
          this.chessBoard[i][j] = 0;
        }
      }
    },
    //   画棋盘
    drawChessBoard() {
      const { context } = this;
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
    //落子
    chessClick(e) {
      console.log(e);
      const { me, chessBoard } = this;
      const ox = e.offsetX;
      const oy = e.offsetY;
      //取整
      const i = Math.floor(ox / 30);
      const j = Math.floor(oy / 30);

      if (chessBoard[i][j] == 0) {
        this.onStep(i, j, me);
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