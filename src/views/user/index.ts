import { Component } from 'vue-property-decorator';
import axios from 'axios';
import 'boxicons'
import BaseView from '../baseView';

@Component({
    components: {
        OfferGeneral: () => import("@/components/OfferGeneral.vue"),
        ProjectList: () => import('@/views/project/list/index.vue')
    }
})
export default class UserProfile extends BaseView{
    constructor() {
        super();
    }
    tab = -1;
    freelancerId:any = '';
    user:any = null;
    created() {
        this.user = this.getUser();
        
    }
    
}