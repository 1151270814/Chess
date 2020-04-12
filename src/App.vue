<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Chess v-if="show"></Chess>
    <ChessDome v-else></ChessDome>
    <div id="cut" class="cut" @click="show=!show">
      <span>dom切换</span>
    </div>
  </div>
</template>

<script>
import Chess from "./components/chess.vue";
import ChessDome from "./components/chessDome"
export default {
  name: "App",
  data(){
    return {
      show:true
    }
  },
  components: {
    Chess,
    ChessDome
  },
  methods: {}
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px auto;

}
.cut {
  width: 200px;
  margin: 0 auto;
  text-align: center;
  background-color: #45c01a;
  border-radius: 5px;
}
.cut > span {
  display: inline-block;
  padding: 10px 20px;
  color: #fff;
}
</style>
