<template>
  <div id="app">
    <h1>深圳加油！</h1>

    <button @click="x++">{{x + y}}</button>

    <button @click="isShow = !isShow">{{isShow}}</button>

    <hr />

    <hello-world v-if="isShow" :data="x + y"></hello-world>

  </div>
</template>

<script>

// 导出的是一个对象而不是组件
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
    HelloWorld

  },

  // beforeCreate() {
  //   console.group('beforeCreate');
  //   // console.log(x);
  //   console.log('data', this.$data);
  //   console.log('el', this.$el);
  //   console.groupEnd('beforeCreate');
  // },

  // created() {
  //   console.group('created');
  //   console.log('data', this.$data);
  //   console.log('el', this.$el);
  //   console.groupEnd('created');
  // },

  // beforeMount() {
  //   console.group('beforeMount');
  //   console.log(this.$el);
  //   console.groupEnd('beforeMount');
  // },

  // mounted() {
  //   console.group('mounted');
  //   console.log(this.$el);
  //   console.groupEnd('mounted');
  // },

  // beforeUpdate() {
  //   console.group('beforeUpdate');
  //   console.log(this.$el);
  //   console.groupEnd('beforeUpdate');
  // },

  // updated() {
  //   console.group('updated');
  //   console.log(this.$el);
  //   console.groupEnd('updated');
  // }
  errorCaptured: () => {
    console.log('子组件出错了');
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
