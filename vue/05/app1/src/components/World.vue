<template>
  <div class="hello">
    <div>World - <button @click="fnWorld">按钮</button></div>
  </div>
</template>

<script>

import eventBus from '../eventBus'

export default {
  name: 'WorldCom',
  methods: {
    fnWorld() {
      // console.log('World', this.$attrs);
      // console.log(this.val);
      // console.log(eventBus);
      eventBus.$emit('abc', 10000);
    }
  },
  inject: ['val']
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
