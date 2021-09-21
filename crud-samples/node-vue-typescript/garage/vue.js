
export default {
  components: {
    ListBlock,
    DeleteForm
  },
  props: {
    rawData : {
    },
    model : {
      type: Object
    }
  },
  data() {
    return {
    }
  },
  methods: {
    deleteRecord(model) {
      this.$emit('submitDelete', model);
    },
    foreach() {
      for (let [key, value] of Object.entries(request)) {
        this.listingParams[key] = value;
      }
    }
  },
  watch: {
    /* Whenever List Data is updated this function is called */
    listingData: function(newVal, oldVal) { // watch props
      this.dataCount = this.listingData.length
      this.getFinalPageNumber()
      this.checkCurrent()
    }
  },
  computed: {
  },
  mounted: function() {
    // on mount of this component get list data
    this.emitRefresh();
  },
  created() {
    this.fetchAllData();
  }
};
<p>{{title}}</p>
<a v-if="response != false" :data="response" :class="inputSign(field.key)" @close="close"></a>

<form method="POST" @submit.prevent="onSubmit">
  <p v-for="errorMsg of rawData.errors.errorsData[field.key]">{{errorMsg}}</p> Object
  (value, key) in listingKeys Array
</form>


@Component({
  // All component options are allowed in here
  components : {},
  template: '<button @click="onClick">Click!</button>',
  props: {
    propMessage: String
  }
})
export default class MyComponent extends Vue {
  // Initial data can be declared as instance properties
  message: string = 'Hello!'
  mounted () {
    this.greet()
  }
  created () {
    console.log(this.mixinValue) // -> Hello
  }
  @Prop({default: 'Example'})
  exampleProperty: string'

  @Watch('myProperty')
  onPropertyChanged(value: string, oldValue: string) {
    // Do stuff with the watcher here.
  }
  // Component methods can be declared as instance methods
  onClick (): void {
    window.alert(this.message)
  }

  @Emit('heroChanged')
  emitRefresh(mode: string, hero: Hero) {
    this.clear();
  }
}
