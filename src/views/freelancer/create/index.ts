import BaseView from '@/views/baseView';
import axios from 'axios';
import { Component } from 'vue-property-decorator';


@Component
export default class CreateFreelancer extends BaseView {
    userName = 'Furkan';
    professionHeader = '';
    categories = '';
    category = null;
    show = true;
    amenities= [1, 4];
    neighborhoods= [1];
    about = '';
    location = '';
    hourlyFee = 0;

    currencies = [{val: 1, text: '₺ TL', symbol:'₺'}, {val: 2, text: '$ USD', symbol: '$'}, {val: 3, text: '€ EUR', symbol: '€'}];
    theCurrency = 1;

    rules = [
        (        value: { size: number; }) => !value || value.size < 2000000 || 'Avatar size should be less than 2 MB!',
      ];
    theRules= [
    (professionHeader: string) => !!professionHeader || 'Required.',
    (professionHeader: string) => (professionHeader && professionHeader.length >= 3) || 'Min 3 characters',
    ];
    token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6Im9idWxpdGVzdCtsaXZldjUyQGdtYWlsLmNvbSIsImV4cGlyZXMiOjE2NTI2MTk2NTUuNjY3MjgwNH0.5M41zmTs4CGGYKybD7aVqX2g66WT4ujSLw_xVPekuBU';
    skills:any = [];

    created() {
        axios.get('https://bionluk.com/api/general/skills/',{
            headers: {
                Authorization: 'Bearer ' + '6b68bb6c33d22443b445ec7e80fa4ad41' 
            } 
        }).then(r => {
            console.log(r);
        });
        this.showLoading(true);
        axios
            .get('http://localhost:1337/categories').then(response => {
            this.categories = response.data;
        }).finally(() => this.showLoading(false)); 
       
    }
}