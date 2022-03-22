import { Component, Vue } from 'vue-property-decorator';
import 'boxicons'
@Component
export default class Login extends Vue{
  
  active = "";
  loading = false;
  selection = ""; 
  reserve = "";
  value1 = "";
  value2 = "";
  hasVisiblePassword = false;
  getProgress = 0;
  created() {
      console.log("falan filan");
  }
  mounted() { 
    //sth
  }

 
}