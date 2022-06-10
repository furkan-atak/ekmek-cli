import { Component } from 'vue-property-decorator';
import axios from 'axios';
import 'boxicons'
import BaseView from '../../baseView';

@Component({
    components: {
        OfferGeneral: () => import("@/components/OfferGeneral.vue"),
        ProjectList: () => import('@/views/project/list/index.vue')
    }
})
export default class FreelancerProfile extends BaseView{
    constructor() {
        super();
    }
    tab = -1;
    freelancerId:any = '';
    freelancer:any = null;
    created() {
        this.freelancerId = this.$route.query['freelancerId'];
        if(this.freelancerId) {
            this.showLoading(true);
            axios.get(`http://localhost:1337/freelancers?id=${this.freelancerId}`).then(response => {
                    this.freelancer = response.data[0];
            }).finally(() => { this.showLoading(false) });
        }
    }
    
}