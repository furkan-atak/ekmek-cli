import { Vue } from "vue-property-decorator";


export default abstract class BaseView extends Vue{
    
    constructor() {
        super();
    }
    /* eslint-disable */
    navigate(path: string, query?: any) {
        const url = path.startsWith("/", 0) ? path : "/".concat(path);
        this.$router.push({path: url, query: query});
    }

    showLoading(bool: boolean) {
       this.$store.commit("SET_LOADING", bool);
    }

}