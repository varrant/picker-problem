import Vue from 'vue';
import VueRouter from 'vue-router';
import './styles/sass/reset.scss';
import App from './app';
import router from './router.js';
import vueTap from 'v-tap';
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';
Vue.use(Mint);
// import fastclick from 'fastclick';
import Vuex from 'vuex';
import axios from './http';
// 全局store
import store from './store/store';

Vue.prototype.axios = axios;
// import vueResource from 'vue-resource';
// Vue.use(vueResource);
Vue.use(vueTap);
// 使用全局数据流
Vue.use(Vuex);
// footer
import publicFooter from './components/footer';
// 使用路由
Vue.use(VueRouter);

Vue.component('publicFooter', publicFooter);

/**
 * 路由相关 路由规则配置
 * */
// const router = new VueRouter({
//   mode: 'hash',
//   // base: __dirname,
//   routes: configRouter
// });

new Vue({
  // el: '#app',
  axios,
  store,
  router,
  render: h => h(App)
}).$mount('#app');
