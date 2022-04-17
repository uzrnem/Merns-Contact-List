import Vue from 'vue';
import { Component, Provide } from 'vue-property-decorator';

@Component({
  name: 'Medium',
  template: require('./medium.component.html'),
  style: require('./medium.component.scss'),
  components: {  }
})
export class Medium extends Vue {
  @Provide()
  public title: string = 'Medium Page';

  public mounted() {
  }
}

Vue.component('medium', Medium);
