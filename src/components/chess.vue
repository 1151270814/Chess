<template>
  <div class="box">
      <h1>-- 五子棋 --</h1>
    <canvas ref="canvas" width="450" height="450" ></canvas>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      chess: {},
      context: {}
    };
  },
  computed: {},
  watch: {},
  methods: {
    //   初始化
      init () {
        this.chess = this.$refs.canvas
        this.context = this.chess.getContext("2d")
        this.drawChessBoard()
      },
    //   画棋盘
    drawChessBoard() {
      const { context } = this;
      context.strokeStyle = "#bfbfbf";
      for (let i = 0; i < 15; i++) {
        //   画竖线
        context.moveTo(15 + i * 30, 15);
        context.lineTo(15 + i * 30, 435);
        context.stroke();
        // 画横线
        context.moveTo(15, 15 + i * 30);
        context.lineTo(435, 15 + i * 30);
        context.stroke();
      }
    }

  },
  created() {},
  mounted() {
      this.init()
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