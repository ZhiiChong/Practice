<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <div>Home - <button @click="fnHome">按钮</button></div>
    <Hello ref="helloRef" msg="message1"/>
    <hr />

    <Study />
  </div>
</template>

<script>
import Hello from './components/Hello.vue'
import Study from './components/Study.vue'

export default {
  name: 'App',
  components: {
    Hello,
    Study
  },
  provide: {
    val: 100  // 通过注入跨级通信，除了开发高阶插件、组件库不推荐使用
  },
  methods: {
    fnHome() {
      //console.log("fnHome");

      // $ref 方式
      // console.log(this.$refs.helloRef);
      // this.$refs.helloRef.fnHello();

      // $children 方式
      // console.log(this.$children[0]);
      // this.$children[0].fnHello();
    }
  }
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
