import BaseView from '@/views/baseView';
import axios from 'axios';
import { Component, Vue } from 'vue-property-decorator';


@Component
export default class Programming extends BaseView{
  
  itemk = [
    {
      src: 'https://i.pinimg.com/originals/26/ea/1a/26ea1ae84baf2c11d38b96ef2b420422.gif'
    },
    {
      src: 'https://media.itpro.co.uk/image/upload/s--X-WVjvBW--/f_auto,t_content-image-full-desktop@1/v1607599857/Remote_access_Shutterstock.jpg'
    },
    {
      src: 'https://media.itpro.co.uk/image/upload/s--X-WVjvBW--/f_auto,t_content-image-full-desktop@1/v1607599857/Remote_access_Shutterstock.jpg'
    },
    {
      src: 'https://media.itpro.co.uk/image/upload/s--X-WVjvBW--/f_auto,t_content-image-full-desktop@1/v1607599857/Remote_access_Shutterstock.jpg'
    }
  ];

  
  icons = ['mdi-rewind', 'mdi-play', 'mdi-fast-forward'];
  items:any = [];

  active = "";
  data = 12;
  loading = false;
  selection = ""; 
  reserve = "";
  created() {
      this.loadData();
      console.log("falan filan");
  }
  mounted() { 
    //sth
  }
  logAt(sth:string) {
      console.log(sth);
  }

  async loadData() {
    this.showLoading(true);
    setTimeout(() => {
      axios.get('http://localhost:1337/freelancers').then(response => {
      this.items = response.data;
      console.log(this.items);
    }).catch(error => {
      // Handle error.
      alert('Please make sure that server is running! \n' + error.response);
      //console.log('An error occurred:', error.response);
    }).finally(() => this.showLoading(false));
    }, 1500);
    
  }
  
  

 
}