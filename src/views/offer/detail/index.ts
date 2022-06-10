import BaseView from "@/views/baseView";
import axios from "axios";
import Component from "vue-class-component";

@Component
export default class OfferDetail extends BaseView{ 


    changeStyle = false;
    nameSurname = '';
    offerId:any = '';
    freelancer:any;
    offer:any = null;
    today:Date = new Date();
    created() {
        this.today = new Date();
        this.offerId = this.$route.query['id'];
        this.showLoading(true);
       axios.get(`http://localhost:1337/offers?id=${this.offerId}`).then(response => {
            this.offer = response.data[0];
            this.freelancer = this.offer.freelancer;
            this.nameSurname = this.freelancer.name + this.freelancer.surname;
       }).finally(() => { this.showLoading(false) });
      
    }

    changed(){
        this.changeStyle = this.changeStyle ? false:true;   
    }


    durationTemplate(val:any){
        return this.estimatedDurations.find(t => t.val === val)?.text;
    }

}