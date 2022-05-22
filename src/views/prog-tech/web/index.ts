import BaseView from '@/views/baseView';
import axios from 'axios';
import { Component } from 'vue-property-decorator';

@Component({
  components: {
      OfferGeneral: () => import("@/components/OfferGeneral.vue")
  }
})
export default class Web extends BaseView{

  categId = '';
  loadData = false;
  created() {
    this.showLoading(true);
    axios.get('http://localhost:1337/categories?name=Web Programlama').then(resp => {
     this.categId =  resp.data[0].id;
    }).then(() => this.loadData = true).then(() => this.showLoading(false));

  }

 
}