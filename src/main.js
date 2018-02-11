import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.prototype.$eventBus = new Vue();

import Home from './routes/Home';
import Configuration from './routes/Configuration';
import Confirm from './routes/Confirm';
import NotFound from './routes/NotFound';
import App from './App.vue';

const routes = [
    { path: '/', name: '', component: Home },
    { path: '/configuration', name: 'configuration', component: Configuration },
    { path: '/confirm', name: 'confirm', component: Confirm },
    { path: '/404', name: '404', component: NotFound }
];

Vue.use(VueRouter);

const router = new VueRouter({
    routes
});

const app = new Vue({
    router,
    render: h => h(App)
}).$mount('#app')