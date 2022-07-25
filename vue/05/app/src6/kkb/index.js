//import Vue from 'vue';



export default function (_vue) {
  
  console.log('kkb', _vue);

  // Vue.component('KComponent', {
  //   template: `<div>KComponent</div>`,
  //   render: h => {
  //     return h(`<div>KComponent</div>`)
  //   }
  // });

  _vue.filter('kkb1', function (v) {
    return v.toUpperCase();
  })
}