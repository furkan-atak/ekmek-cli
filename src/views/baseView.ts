import { Vue } from "vue-property-decorator";


export default abstract class BaseView extends Vue{
    
    constructor() {
        super();
    }

    getUser() {
        console.log(localStorage.getItem('user'));
        const user = localStorage.getItem('user');
        if(user) {
            return JSON.parse(user);
        }
        return null;
    }

    /* eslint-disable */
    navigate(path: string, query?: any) {
        const url = path.startsWith("/", 0) ? path : "/".concat(path);
        this.$route.path !== url ? this.$router.push({path: url, query: query}) : false;
    }

    showLoading(bool: boolean) {
       this.$store.commit("SET_LOADING", bool);
    }

}