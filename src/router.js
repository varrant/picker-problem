// export default [{
//   path: '/',
//   name: '产品列表',
//   component: require('./views/product-list.vue')
// },
// {
//   path: '/details/:id',
//   name: '产品详情',
//   component: require('./views/product-details.vue')
// }];

import Vue from 'vue';
import VueRouter from 'vue-router';
import store from './store/store';
import * as types from './store/types';

Vue.use(VueRouter);

const routes = [{
  path: '/register',
  name: 'register-step3',
  component: require('./views/register')
}];

// 页面刷新时，重新赋值token
if (window.localStorage.getItem('token')) {
  store.commit(types.LOGIN, window.localStorage.getItem('token'));
}

const router = new VueRouter({
  routes
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(r => r.meta.requireAuth)) {
    if (store.state.token) {
      next();
    } else {
      next({
        path: '/login',
        query: {
          redirect: to.fullPath
        }
      });
    }
  } else {
    next();
  }
});

export default router;
