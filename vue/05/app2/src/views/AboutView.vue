<template>
  <div class="about">
    <h1>This is an about page - {{val}} - {{result}}</h1>
    <!-- <p>title: {{$store.state.title}}</p>
    <p>content: {{$store.state.content}}</p> -->
    <p>{{t}}</p>
    <p>{{c}}</p>
  </div>
</template>
<script>

import {mapState} from 'vuex'

export default {
  name: 'AboutView',
  data() {
    return {
      val: 1
    }
  },

  // computed: {
  //   t() {
  //       return this.$store.state.title
  //   },
  //   c() {
  //       return this.$store.state.content
  //     }
  //   }

  /**
   * computed: {
   *  title() {return this.$store.state.title}
   *  content() {return this.$store.state.content}
   * }
   */
  computed: // mapState(['title', 'content'])
  {
    result() {
      return this.val * 10;
    },
    ...mapState({   //  返回一个对象，结构合并导 computed 对象里
      t: 'title',
      c: ({ content }) => { return content.toUpperCase() }
    })
  }
    
}
</script>
