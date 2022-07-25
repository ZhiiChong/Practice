<template>
    <div>
        Hello World! - {{count}}
        <button @click="start">开始变大</button>
    </div>

</template>

<script>
// import { defineComponent } from '@vue/composition-api'

export default {
    
    name: 'HelloWorld',


    data() {
        return {
            count: 0,
            timer: null
        }
    },

    methods: {
        start() {
            console.log(this);
            setInterval(() => {
                this.count++;
            }, 1000);
        }
    },


    beforeCreate() {
    // console.group('HelloWolrd-beforeCreate');
    // // console.log(x);
    // console.log('data', this.$data);
    // console.log('el', this.$el);
    // console.groupEnd('HelloWolrd-beforeCreate');
    },

    reated() {
        // concsole.group('HelloWolrd-created');
        // console.log('data', this.$data);
        // console.log('el', this.$el);
        // console.groupEnd('HelloWolrd-created');

        // // 通过将定时器指定到到组件 data 上，避免组件销毁后，定时器仍然存在的情况
        // this.timer = setInterval(() => {
        //     console.log('hello world');
        // }, 1000)

        // throw new Error('出错了');

    },

    beforeMount() {
        // console.group('HelloWolrd-beforeMount');
        // console.log(this.$el);
        // console.groupEnd('HelloWolrd-beforeMount');
    },

    mounted() {
        // console.group('HelloWolrd-mounted');
        // console.log(this.$el);
        // console.groupEnd('HelloWolrd-mounted');
    },

    beforeUpdate() {
        // console.group('HelloWolrd-beforeUpdate');
        // console.log(this.$el);
        // console.groupEnd('HelloWolrd-beforeUpdate');
    },

    updated() {
        // console.group('HelloWolrd-updated');
        // console.log(this.$el);
        // console.groupEnd('HelloWolrd-updated');
    },

    beforeDestroy() {
        // console.group('HelloWolrd-beforeDestroy');
        // console.log(this.$el);
        // console.groupEnd('HelloWolrd-beforeDestroy');
    },

    destroyed() {
        // console.group('HelloWolrd-destroyed');
        // console.log(this.$el);
        // console.groupEnd('HelloWolrd-destroyed');

        // clearInterval(this.timer)
    }

}
</script>
