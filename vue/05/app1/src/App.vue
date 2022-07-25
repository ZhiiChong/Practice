<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <div>Home - <button @click="fnHome">按钮</button></div>
    <Hello ref="helloRef"/>
  </div>
</template>

<script>
import Hello from './components/Hello.vue'

export default {
  name: 'App',
  components: {
    Hello
  },
  methods: {
    fnHome() {
      console.log("fnHome");
      // console.log(this.$refs.helloRef.fnHello());
      console.log(this.$children);
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
