import axios from 'axios';
import { Component } from 'vue-property-decorator';
import BaseView from '../../baseView';

@Component
export default class PostProject extends BaseView{ 

    projectHeader = '';
    projectDescription = '';
    budget = 0;

    categories:any = [];
    category = null;

    active = false;

    subCategories = [];
    subCategory = null;

    bugdetTypes = [{val: 1, text: 'Sabit Ücret'}, {val:2, text: 'Saatlik Ücret'}];
    theBudgetType = 0;
    
    theCurrency = 1;
    
    theEstimatedDuration = 0;


    showDetail = false;

    rules= [
        (projectHeader: string) => !!projectHeader || 'Required.',
        (projectHeader: string) => (projectHeader && projectHeader.length >= 3) || 'Min 3 characters',
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

    postProject() {
        axios
      .post('http://localhost:1337/projects', {
        header: this.projectHeader,
        description: this.projectDescription,
        category: this.subCategory,
        group: this.category,
        BudgetType: this.bugdetTypes.find(t => t.val === this.theBudgetType)?.text,
        Currency: this.currencies.find(t => t.val === this.theCurrency)?.text,
        Budget: this.budget,
        EstimatedDuration: this.estimatedDurations.find(t => t.val === this.theEstimatedDuration)?.text,
        user: null,
        freelancer: null,
        published_at: new Date(),
        created_by: null,
        updated_by: null
      }).then(r => {
          alert(r.data);
      }).catch(error => {
        alert('post error' + error);
      });

    }

}