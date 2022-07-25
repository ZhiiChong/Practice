<template>
  <div class="hello">
    <div>Hello <World /></div>
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
