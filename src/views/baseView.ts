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
    estimatedDurations = [
        {val: 0, text: 'Seç'},
        {val: 1, text: '1 gün veya daha az'},
        {val: 2, text: '1 haftadan az'},
        {val: 3, text: '1-2 hafta'},
        {val: 4, text: '3-4 hafta'},
        {val: 5, text: '1-6 ay'},
        {val: 6, text: '6 aydan fazla'},
        {val: 7, text: 'Devam eden'},
        {val: 8, text: 'Emin Değilim'},
        {val: 9, text: 'Diğer'}
    ];
    /* eslint-disable */
    navigate(path: string, query?: any) {
        const url = path.startsWith("/", 0) ? path : "/".concat(path);
        this.$route.path !== url ? this.$router.push({path: url, query: query}) : false;
    }

    showLoading(bool: boolean) {
       this.$store.commit("SET_LOADING", bool);
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