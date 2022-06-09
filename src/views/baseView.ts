import { Vue } from "vue-property-decorator";


export default abstract class BaseView extends Vue{
    
    constructor() {
        super();
    }

    getUser() {

        const user = localStorage.getItem('user');
        if(user) {
            return JSON.parse(user);
        }
        return null;
    }
    
    bugdetTypes = [{val: 1, text: 'Sabit Ücret'}, {val:2, text: 'Saatlik Ücret'}];

    estimatedDurations = [
        {val: 0, text: 'Seç', selected:false},
        {val: 1, text: '1 gün veya daha az', selected:false},
        {val: 2, text: '1 haftadan az', selected:false},
        {val: 3, text: '1-2 hafta', selected:false},
        {val: 4, text: '3-4 hafta', selected:false},
        {val: 5, text: '1-6 ay', selected:false},
        {val: 6, text: '6 aydan fazla', selected:false},
        {val: 7, text: 'Devam eden', selected:false},
        {val: 8, text: 'Emin Değilim', selected:false}
    ];

    currencies = [
        {val: 1, text: '₺ TL',  symbol:'₺'},
        {val: 2, text: '$ USD', symbol: '$'},
        {val: 3, text: '€ EUR', symbol: '€'}
    ];
    /* eslint-disable */
    navigate(path: string, query?: any) {
        const url = path.startsWith("/", 0) ? path : "/".concat(path);
        this.$route.path !== url ? this.$router.push({path: url, query: query}) : false;
    }

    showLoading(bool: boolean) {
       this.$store.commit("SET_LOADING", bool);
    }

    budgetTypeTemplate(item: any) {
        return this.bugdetTypes.find(t => t.val === item)?.text;
    }

    currencyTemplate(item: any) {
        return this.currencies.find(t => t.val === item)?.symbol;
    }

}

export class User {
    email = '';
    favourites:any = [];
    id = '';
    job_requests:any = [];
    messages:any = [];
    purchases: any = [];
    category:any;
    role:any;
    createdAt = '';
    updatedAt = '';
    username = '';
}