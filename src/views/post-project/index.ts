import axios from 'axios';
import { Component } from 'vue-property-decorator';
import BaseView from '../baseView';

@Component
export default class PostProject extends BaseView{ 

    value = '';
    projectName = '';
    projectHeader = '';
    categories:any = [];
    category = null;
    active = false;
    subCategories = [];
    subCategory = null;
    bugdetTypes = [{val: 1, text: 'Sabit Ücret'}, {val:2, text: 'Saatlik Ücret'}];
    theBudgetType = 0;
    currencies = [{val: 1, text: '₺ TL'}, {val: 2, text: '$ USD'}, {val: 3, text: '€ EUR'}];
    theCurrency = 0;
    showDetail = false;

    rules= [
        (projectName: string) => !!projectName || 'Required.',
        (projectName: string) => (projectName && projectName.length >= 3) || 'Min 3 characters',
      ];
    valid= [
        (category: any) => !!category || 'Required.',
        (subCategory: any) => !!subCategory || 'Required.',
      ];
    created() {
        
        this.showLoading(true);
        axios
            .get('http://localhost:1337/groups').then(response => {
            this.categories = response.data;
        }).finally(() => this.showLoading(false));
    }

    setSubCategory() {
        const sub = this.categories.find((t: any) => t.id === this.category);
        sub !== undefined ? this.subCategories = sub.categories:false;
    }

    showRest() {
        if(!(this.category !== null && this.subCategory !== null)) return;
        this.showDetail = true;
        
    }
}