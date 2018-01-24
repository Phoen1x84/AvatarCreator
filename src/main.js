import Vue from 'vue';
Vue.prototype.$eventBus = new Vue();
//import routes from './routes';
import App from './App.vue';

// const app = new Vue({
//     el: '#app',
//     data: {
//         currentRoute: window.location.pathname
//     },
//     computed: {
//         ViewComponent() {
//             const matchingView = routes[this.currentRoute];
//             return matchingView
//                 ? require('./pages/' + matchingView + '.vue')
//                 : require('./pages/404.vue');
//         }
//     },
//     render(h) {
//         return h(this.VueComponent)
//     }
// })

// window.addEventListener('popstate', () => {
//     app.currentRoute = window.location.pathname
// })

const app = new Vue({
    el: '#app',
    render: h => h(App)
});