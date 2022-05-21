import { Component } from 'vue-property-decorator';
import 'boxicons'
import BaseView, { User } from '../baseView';

@Component
export default class Intro extends BaseView{
  
    user:User = this.getUser(); 
    icon = 'mdi-play';
    header = 'Freelancer Ol';
    subHeader = 'Freelancer topluluğumuza katıl, iş yayınla yeneteneklerini sergile ve para kazan!';
    
    created() {
        this.user = this.getUser();
        console.log('user: ', this.user);
        console.log(this.user);
        if(this.user && this.user.role.name === 'Freelancer') {
            this.header = 'Teklif Oluştur';
            this.subHeader = 'Alıcılara sabit bir fiyat karşılığında neler sunabileceğinizi bildirin!';
        }
    }

    goTo(path?:any) {
        if(path !== 'null'){
            this.navigate(path);
        }
        else if(this.user && this.user.role.name === 'Freelancer'){
            this.navigate('/post-offer');
        }else {
            this.navigate('/freelancer/create');
        }
        
    }
    
}