<template>
  <div id="app">
    <h1>{{t}}</h1>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <hr />
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  // data() {
  //   return {
  //     t: ''
  //   }
  // },
  // created() {
  //   console.log(this.$store);
  //   this.t = this.$store.state.title;
  //   }
  computed: {
    t() {
      return this.$store.state.title;
    }
  }
  }
</script>
