import BaseView from "@/views/baseView";
import axios from "axios";
import Component from "vue-class-component";

@Component
export default class ProjectDetail extends BaseView{ 

    projectId:any = '';
    project:any = null;
    today:Date = new Date();
    created() {
        this.today = new Date();
        this.projectId = this.$route.query['id'];
        this.showLoading(true);
       axios.get(`http://localhost:1337/projects?id=${this.projectId}`).then(response => {
            this.project = response.data[0];
       }).finally(() => { this.showLoading(false) });
      
    }

    getTimePast(time: any){
        const theDate = new Date(time);
        const timePastMinutes = Math.round((this.today.getTime() - theDate.getTime()) / (1000 * 60));
        let timeString = timePastMinutes / 60 >= 1 ? Math.round(timePastMinutes / 60)  + ' saat önce yayınlandı.' : timePastMinutes + ' dakika önce yayınlandı.';
        timeString = timePastMinutes / (60*24) >= 1 ? Math.round(timePastMinutes / (60*24)) + ' gün önce yayınlandı.' : timeString; 
        return timeString;
    }



}