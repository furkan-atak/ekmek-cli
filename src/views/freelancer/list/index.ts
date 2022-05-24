import BaseView from '@/views/baseView';
import axios from 'axios';
import { Component } from 'vue-property-decorator';

@Component({
  components: {
      FreelancerGeneral: () => import("@/components/FreelancerGeneral.vue")
  }
})
export default class FreelancerList extends BaseView{

//   categId = '';
//   loadData = false;
//   created() {
//     this.showLoading(true);
//     axios.get('http://localhost:1337/freelancers').then(resp => {
//      this.categId =  resp.data[0].id;
//     }).then(() => this.loadData = true).then(() => this.showLoading(false));

//   }

 
}