<template>
  <div id="app">
    <h1>深圳加油！</h1>

    <hr />

    <hello-world ref="hw"></hello-world>

    <hr />

    <input type="text" ref="myInput"/>

    <button @click="setFocus">按钮</button>
    <button @click="start">开始</button>

  </div>
</template>

<script>

// 导出的是一个对象而不是组件
// import HelloWorld from "./components/HelloWorld";

import HelloWorld from "./components/HelloWorld";

export default {
  name: 'App',
  
  data() {
    return {
      x: 1,
      y: 2,
      isShow: false
    }
  },

  components: {
    // HelloWorld
    HelloWorld

  },

  methods: {
    setFocus() {
      this.$refs.myInput.focus();
    },
    start() {
      console.log(this.$refs.hw);
      this.$refs.hw.start();
    }
  },

  mounted: () => {
    let input = document.querySelector('input');
    console.log(input);
    input.focus();
  },

  
  // errorCaptured: () => {
  //   console.log('子组件出错了');
  //   return false;
  // }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
