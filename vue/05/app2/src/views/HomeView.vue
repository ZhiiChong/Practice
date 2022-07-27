<template>
  <div class="home">
    Home - {{c}}
    <div>
      姓名: <input type="text" ref="newUserName" />
      性别: <select ref="newUserSex">
        <option>男</option>
        <option>女</option>
      </select> <button @click="addNewUser">添加新的用户</button><span v-show="msg">{{msg}}</span>
    </div>
    <hr />
    <ul>
      <li v-for="user of users">{{user.id}} - {{user.username}}</li>
    </ul>
    <hr />
    <ul>
      <li v-for="user of sortUsers">{{user.id}} - {{user.username}}</li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
  data() {
    return {
      c: '',
      msg: ''
    }
  },
  created() {
    // 这里的 c 不会根据 content 变化
    this.c = this.$store.state.content;
  },
  computed: {
    users() {
      // return this.$store.state.users;
      // console.log(this.$store.getters);
      return this.$store.getters.showUsers;
    },
    sortUsers() {
      // return this.$store.getters.showSortUsers;
      // 传参
      //console.log(this.$store.state.users)
      return this.$store.getters.showSortUsers('desc');
    }
  },
  methods: {
    async addNewUser() {
      // console.log(this.$refs.newUserSex.value);

      // 通过 commit 提交动作到 mutations 对应的方法中
      if ('' !== this.$refs.newUserName.value && 'undefined' !== typeof (this.$refs.newUserName.value)) {
        // this.$store.commit('addNewUser', {
        //   name: this.$refs.newUserName.value,
        //   gender: this.$refs.newUserSex.value
        // })
        // 另一种写法
        // this.$store.commit({
        //   type: 'addNewUser',
        //   data: {
        //     name: this.$refs.newUserName.value,
        //     gender: this.$refs.newUserSex.value
        //   }
        // })
        // 使用 mutations 不支持异步处理（源码未使用 await）
        // 需要异步处理时使用 action
        this.msg = '';
        try {
          await this.$store.dispatch('addNewUser', {
            name: this.$refs.newUserName.value,
            gender: this.$refs.newUserSex.value
          });
        } catch (e) {
          console.log('reject');
          this.msg = e;
        }
        this.$refs.newUserName.value = '';
      }
      
    }
  }
}
</script>
