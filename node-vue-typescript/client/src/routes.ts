// Dependencies
import Vue from 'vue';
import VueRouter from 'vue-router';

// Component routes
import { Home } from './components/home';
import { Medium } from './components/medium';

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/medium',
      name: 'Medium',
      component: Medium
    }
  ],
  linkActiveClass: 'active',
  mode: 'history'
});
