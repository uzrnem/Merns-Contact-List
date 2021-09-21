import Vue from 'vue';
import { Component, Provide } from 'vue-property-decorator';

@Component({
  name: 'AppComponent',
  template: require('./app.component.html'),
  style: require('./app.component.scss'),
  components: {  }
})
export class AppComponent extends Vue {

  public mounted() {
  }
}

Vue.component('app', AppComponent);
