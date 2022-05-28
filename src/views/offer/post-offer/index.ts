import axios from 'axios';
import { Component } from 'vue-property-decorator';
import BaseView, { User } from '../../baseView';

@Component
export default class PostOffer extends BaseView{ 

    offerHeader = '';
    offerDescription = '';
    fee = 0;


    categories:any = [];
    category = -1;
    user:User = new User();
    freelancer:any = null;
    subCategories = [];
    subCategory = null;

    theCurrency = {val: 1, text: '₺ TL', symbol:'₺'};

    theEstimatedDuration = 0;


    rules= [
        (projectHeader: string) => !!projectHeader || 'Required.',
        (projectHeader: string) => (projectHeader && projectHeader.length >= 3) || 'Min 3 characters',
      ];
    valid= [
        (category: any) => !!category || 'Required.',
        (subCategory: any) => !!subCategory || 'Required.',
      ];
    created() {
        this.user = this.getUser();
        this.showLoading(true);
        axios
        .get(`http://localhost:1337/freelancers?userId=${this.user.id}`).then(response => {
            this.freelancer = response.data[0];
        }).catch(error => {
            console.log('freelancer cannot find');
        })
        
        axios
            .get('http://localhost:1337/groups').then(response => {
            this.categories = response.data;
        }).finally(() => this.showLoading(false));
    }

    setSubCategory() {
        const sub = this.categories.find((t: any) => t.id === this.category);
        sub !== undefined ? this.subCategories = sub.categories:false;
    }

    setCurrency(c:any) {
        this.theCurrency = c;
        console.log(this.theCurrency);
    }

    postOffer() {
      console.log(this.subCategory)
      console.log(this.category)
        axios
      .post('http://localhost:1337/offers', {
        freelancer: this.freelancer,
        offerHeader: this.offerHeader,
        fee: this.fee,
        currency: this.theCurrency.val,
        category: this.subCategory,
        offerDetails: this.offerDescription,
        duration: this.theEstimatedDuration,
        published_at: new Date,
        created_by: this.user
      }).then(r => {
          alert(r.data);
      }).catch(error => {
        alert('post error' + error);
      });

    }

}