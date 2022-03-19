import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Login extends Vue{
  
  active = "";
  loading = false;
  selection = ""; 
  reserve = "";
  created() {
      console.log("falan filan");
  }
  mounted() { 
    //sth
  }

 
}