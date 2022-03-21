import { Component } from 'vue-property-decorator';
import BaseView from '../views/baseView';

@Component
export default class Hello extends BaseView{
  constructor() {
      super();
  }


  active = "";
  loading = false;
  selection = ""; 
  reserve = "";
  created() {
      console.log("falan filan");
  }
  mounted() { 
    //sth
  }
  /* eslint-disable */
  goTo(path: string, query?: any) {
    this.navigate(path, query);
  }
}
