import Vue from 'vue';
import App from './App.vue';

// hacked together routing not finished
// const route = {
//     '/': home,
//     'configure': configure
// };

const app = new Vue({
    el: '#app',
    render: h => h(App)
});