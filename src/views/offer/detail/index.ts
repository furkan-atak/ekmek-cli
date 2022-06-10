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
    purchases:any = [];
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


    buy() {
        const arr = this.getUser().purchases;
        arr.push(this.offer); 
        console.log(arr)
        this.showLoading(true),
        axios.put(`http://localhost:1337/users/${this.getUser().id}`, {
            purchases: arr
        }).then(resp => {
            alert(resp);
            this.getUpdatedUser();
        }).catch(err => {
            alert(err)
        }).then(() => this.showLoading(false));
    }

    durationTemplate(val:any){
        return this.estimatedDurations.find(t => t.val === val)?.text;
    }

}