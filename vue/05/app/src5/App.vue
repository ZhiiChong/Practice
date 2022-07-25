<template>
  <div id="app">
    <h1>深圳加油！</h1>

    <hr />

    <button :class="{ current: current === 'InBox'}" @click="current = 'InBox'">收邮件</button>
    <button :class="{ current: current === 'PostMail'}" @click="current = 'PostMail'">发邮件</button>
    <button :class="{ current: current === 'RecycleBin'}" @click="current = 'RecycleBin'">垃圾箱</button>
    <!-- 标签卡 -->
    <hr />
    <!-- v-if 会导致经常加载和销毁，状态会丢失 v-show 会将组件暴露 -->
    <!-- <InBox v-if="current === 'InBox'"></InBox>
    <PostMail v-if="current === 'PostMail'"></PostMail>
    <RecycleBin v-if="current === 'RecycleBin'"></RecycleBin> -->


    <!-- keep-alive 组件，使内部组件驻留在内存中，创建后不会销毁（从 dom 中去掉，但仍可访问） -->
    <keep-alive>
      <!-- component组件：动态显示组件，效果等同 v-if -->
      <component :is="current"></component>
    </keep-alive>


  </div>
</template>

<script>

import InBox from './components/InBox';
import PostMail from './components/PostMail';
import RecycleBin from './components/RecycleBin';

export default {
  name: 'App',
  
  data() {
    return {
      x: 1,
      y: 2,
      isShow: false,
      current: 'InBox'
    }
  },

  components: {
    InBox,
    PostMail,
    RecycleBin
  },

  methods: {
    

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

.current {
  background-color: aqua;
}
</style>
