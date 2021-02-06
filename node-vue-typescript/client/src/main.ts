// Vue
import Vue from 'vue';
import VueRouter from 'vue-router';
// Router
import router from './routes';
// Components
import { AppComponent } from './components/app';
// Styles
import './assets/style.scss';
import 'bootstrap/scss/bootstrap.scss';

// Vue init
const app = new Vue({
  el: 'app',
  router,
  components: {
    AppComponent
  }
});
