<template>
  <div id="app">
    <h1>深圳加油！</h1>

    <hr />

    <button @click="inc">{{x}}</button>

    <hr />

    <input type="text" ref="userInput" placeholder="请输入名字"/> <button @click="submit">提交</button>

  </div>
</template>

<script>


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

  },

  methods: {
    inc(e) {
      this.x++;
      console.log(this.x, e.target.innerHTML);
      this.$nextTick(() => {
        console.log(e.target.innerHTML);
      })
    },
    submit() {
      // 数据变化 -> 渲染 -> 渲染不是立即进行的

      if (this.$refs.userInput.value !== '') {
        console.log("提交", this.$refs.userInput.value);
      } else {
        this.$refs.userInput.focus();
        console.log('不允许提交');
      }
      this.x++;

    }

  },

  mounted: () => {
    // let input = document.querySelector('input');
    // console.log(input);
    // input.focus();
  },

  
  errorCaptured: () => {
    console.log('子组件出错了');
    return false;
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
