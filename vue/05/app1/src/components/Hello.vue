<template>
  <div class="hello">
    <div>Hello - <button @click="fnClick">按钮</button><World v-bind="$attrs" /></div>
  </div>
</template>

<script>
import World from "./World.vue"

export default {
  name: "HelloCom",
  components: { World },

  methods: {
    fnHello() {
      console.log('fnHello');
    },
    fnClick() {
      // $parent 方式
      // console.log(this.$parent);
      // this.$parent.fnHome();
      
      // $attrs 使用非 attr 属性进行直接通信，通过 v-bind 跨级通信
      // console.log('Hello', this.$attrs);
    }
  }
  
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
