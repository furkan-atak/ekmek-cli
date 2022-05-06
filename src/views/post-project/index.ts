import axios from 'axios';
import { Component } from 'vue-property-decorator';
import BaseView from '../baseView';

@Component
export default class PostProject extends BaseView{ 

    value = '';
    projectName = '';
    categories:any = [];
    category = 0;
    active = false;
    subCategories = [];
    subCategory = 0;
    bugdetTypes = [{val: 1, text: 'Sabit Ücret'}, {val:2, text: 'Saatlik Ücret'}];
    theBudgetType = 0;
    currencies = [{val: 1, text: '₺ TL'}, {val: 2, text: '$ USD'}, {val: 3, text: '€ EUR'}];
    theCurrency = 0;
    showDetail = false;

    rules= [
        (projectName: string) => !!projectName || 'Required.',
        (projectName: string) => (projectName && projectName.length >= 3) || 'Min 3 characters',
      ];
    created() {
        this.showLoading(true);
        axios
            .get('http://localhost:1337/groups').then(response => {
            this.categories = response.data;
            console.log(this.categories);
        }).finally(() => this.showLoading(false));
    }

    setSubCategory() {
        this.subCategories = this.categories.find((t: any) => t.id === this.category).categories; 
    }

}