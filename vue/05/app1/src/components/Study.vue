<template>
  <div class="hello">
    <div>Study - <button @click="fnStudy">按钮</button></div>
  </div>
</template>

<script>

import eventBus from '../eventBus'

export default {
  name: 'StudyCom',
  methods: {
    fnStudy() {
      // console.log('World', this.$attrs);
      // console.log(this.val);
      // console.log(eventBus);
      // eventBus.$on('abc', function () {
      //   console.log('执行了');
      // })
      console.log(this.val);
    }
  },
  created() {
    eventBus.$on('abc', e => {
      console.log('执行了', e);
      this.val = e;
    })
  },
  data() {
    return {
      val: 0
    }
  }
  // inject: ['val']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
