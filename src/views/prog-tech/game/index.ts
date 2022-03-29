import { Component, Vue } from 'vue-property-decorator';


@Component
export default class Game extends Vue{
  
  active = "";
  data = 12;
  loading = false;
  selection = ""; 
  reserve = "";
  created() {
      console.log("falan filan");
  }
  mounted() { 
    //sth
  }
  logAt(sth:string) {
      console.log(sth);
  }

  

 
}