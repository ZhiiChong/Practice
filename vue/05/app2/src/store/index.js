import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let maxId = 6;

// 创建数据存储的仓库，提供了各种 api 来对数据进行操作
export default new Vuex.Store({
  state: {
    title: 'study',
    content: 'JavaScript',
    userGender: '',
    users: [
            {id: 1, username: 'baogege', gender: '男', checked: false},
            {id: 2, username: 'mt', gender: '男', checked: false},
            {id: 3, username: 'haigege', gender: '男', checked: false},
            {id: 4, username: 'zMouse', gender: '男', checked: false},
            {id: 5, username: 'reci', gender: '女', checked: false},
            {id: 6, username: 'lisi', gender: '女', checked: false}
      ]
  },
  // 类似组件中的 computed
  getters: {
    showUsers({users, userGender}) {
      return '' === userGender ? users : users.filter( user => {return user.gender === userGender})
    },
    showSortUsers({users}) {
      // return users.sort((a, b) => {
      //   return a.id - b.id;
      // })
      // 可以返回一个函数，使组件可以传参
      return (sort = 'asc') => {
        return [...users].sort((a, b) => {
          return 'asc' === sort.toLowerCase() ? a.id - b.id : b.id - a.id;
      })
      }
    }
  },
  mutations: {
    addNewUser(state,  data ) {
      //console.log(data);
      state.users.push({
        id: ++maxId,
        username: data.name,
        gender: data.gender,
        checked: false
      })
    }
  },
  actions: {
    // 第一个参数应为 store 对象，用解构赋值取出其中的 state 和 commit
    addNewUser({ state, commit },  data ) {
      console.log(data);
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (state.users.find(user => user.username === data.name)) {
            // 已存在用户
            reject('已经存在该用户了');
          } else {
            // 按照规范，提交数据的操作应由 mutations 执行
            // state.users.push({
            //   id: ++maxId,
            //   username: data.name,
            //   gender: data.gender,
            //   checked: false
            // });
            commit('addNewUser', data);
            resolve('添加成功');
            console.log("1");
          }
        }, 1000);
      })
      
    }
  },
  modules: {
  }
})
