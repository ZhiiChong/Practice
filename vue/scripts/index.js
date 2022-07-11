var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!',
        loading: 'loading at ' + new Date().toLocaleString(),
        seen: true,
        todos: [
            { text: '学习 Vue' },
            { text: 'Vue 实战' }
        ]
    }
})

var app5 = new Vue({
    el: '#app-5',
    data: {
        message: 'Bye Vue.js!'
    },
    methods: {
        reverseMessage: function () {
            this.message = this.message.split('').reverse().join('')
        }
    }
})

var app6 = new Vue({
    el: '#app-6',
    data: {
        message: 'Good Morning, noob!'
    }
})

// 定义新组件
Vue.component('todo-item', {
    template: '<li>这是一个新的列表项</li>'
})

var app7 = new Vue({
    el: '#app-7'

})

/* 
 *  v-指令名称：参数 = "指令的值"
 */

let newapp = new Vue({
    el: '#newapp',
    data: {
        myId: 'test',
        text: '你好',
        style1: {
            width: '100px',
            height: '100px',
            background: 'gray'
        },
        isActive: true,
        isChecked: false
    }
})
