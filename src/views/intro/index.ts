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
        if(this.user) {
            this.header = 'Teklif Oluştur';
            this.subHeader = 'Alıcılara sabit bir fiyat karşılığında neler sunabileceğinizi bildirin!';
        }
    }

    goTo(path:string) {
        this.navigate(path);
    }
    
}