import BaseView from "@/views/baseView";
import axios from "axios";
import Component from "vue-class-component";

@Component
export default class ListProject extends BaseView{ 

    projects:any = [];
    today:Date = new Date();

    created() {
        this.today = new Date();
       this.showLoading(true);
       axios.get('http://localhost:1337/projects').then(response => {
            this.projects = response.data;
       }).finally(() => { this.showLoading(false) });
    }

    getTimePast(time: any){
        const theDate = new Date(time);
        const timePastMinutes = Math.round((this.today.getTime() - theDate.getTime()) / (1000 * 60));
        let timeString = timePastMinutes / 60 >= 1 ? Math.round(timePastMinutes / 60)  + ' saat önce yayınlandı.' : timePastMinutes + ' dakika önce yayınlandı.';
        timeString = timePastMinutes / (60*24) >= 1 ? Math.round(timePastMinutes / (60*24)) + ' gün önce yayınlandı.' : timeString; 
        return timeString;
    }

    budgetTypeTemplate(item: any) {
        return this.bugdetTypes.find(t => t.val === item)?.text;
    }

    currencyTemplate(item: any) {
        return this.currencies.find(t => t.val === item)?.symbol;
    }

}