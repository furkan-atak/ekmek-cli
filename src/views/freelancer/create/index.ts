import BaseView, { User } from '@/views/baseView';
import axios from 'axios';
import { Component } from 'vue-property-decorator';


@Component({
    components: {
        FileField: () => import("@/components/FileField.vue")
    }
})
export default class CreateFreelancer extends BaseView {
    user:User = this.getUser();
    professionHeader = '';
    categories:any = [];
    category = '';
    show = true;
    amenities= [1, 4];
    neighborhoods= [1];
    about = '';
    theLocation = '';
    filteredLocations = [];
    locations = ['Turkey', 'Others'];
    hourlyFee = 0;
    searchInput = '';
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
    freelancerId = '';
    created() {
        // axios.get('https://bionluk.com/api/general/skills/',{
        //     headers: {
        //         Authorization: 'Bearer ' + '6b68bb6c33d22443b445ec7e80fa4ad41' 
        //     } 
        // }).then(r => {
        //     
        // });
        this.showLoading(true);

        axios
            .get('http://localhost:1337/categories').then(response => {
            this.categories = response.data;
        }).catch(error => {
            alert(error);
        });
        axios.get('http://localhost:1337/users-permissions/roles').then(r => {
            const data:[] = <[]>Object.values(r.data)[0];
            this.freelancerId = data ? (<any>data.find((t:any) => t.name == "Freelancer")).id : '';
        });

        this.showLoading(false);
    }

    search(){
       // this.filteredLocations = <never[]>this.locations.filter((t:any) => t.name.contains(this.searchInput));
    }

    beFreelancer() {
        axios
        .post('http://localhost:1337/freelancers', {
        name: this.user.username,
        surname: '',
        explanation: this.about,
        starPoint: 0,
        fee: this.hourlyFee,
        country: this.theLocation,
        image_url: '',
        category: this.category,
        userId: this.user.id,
        }).then(r => {
            alert('you are a freelancer now ! ' + r.data);
        }).catch(error => {
          alert('post error' + error);
        });
        axios
        .put(`http://localhost:1337/users/${this.user.id}`, {
            role: this.freelancerId
        }).then(r => {
            console.log('success', r);
        }).catch(error => {
            console.log('role error', error);
        });
        
    }
}