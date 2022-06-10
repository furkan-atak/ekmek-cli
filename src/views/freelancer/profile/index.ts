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
    
    
}