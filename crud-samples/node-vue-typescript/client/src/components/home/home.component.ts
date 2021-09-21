import Vue from 'vue';
import { Component, Provide } from 'vue-property-decorator';
import BaseService from '../../libs/baseService';

@Component({
  name: 'Home',
  template: require('./home.component.html'),
  style: require('./home.component.scss'),
  components: {  }
})
export class Home extends Vue {
  @Provide()
  public name: string = '';
  public tagList: any[] = [];
  public service:BaseService = new BaseService('tags');

  mounted() {
    //this.service = new BaseService;
    //this.service.setPath('tags');
    this.getList();
  }

  getList (): void {
    this.service.list({},
      (response:any) => {
        this.tagList = response.data;
        console.log(this.tagList);
      },
      (error:any) => {
        console.log(error);
      }
    );
  }

  onSubmit (): void {
    this.service.create({name : this.name},
      (response:any) => {
        this.name = '';
        this.getList ();
      },
      (error:any) => {
        console.log(error);
      }
    );
  }

  deleteRow(id:string): void {
    this.service.remove(id,
      (response:any) => {
        this.getList ();
      },
      (error:any) => {
        console.log(error);
      }
    );
  }

  updateRow(id:string, name:string, key:number): void {
    this.service.update(id, {name : name},
      (response:any) => {
        this.getList ();
        this.tagList[key]['edit'] = false;
      },
      (error:any) => {
        console.log(error);
      }
    );
  }

  editRow(key:number): void {
    let arr:any[] = this.tagList.slice(0);
    arr[key]['edit'] = true;
    this.tagList = arr;
  }
}

Vue.component('home', Home);
