import BaseView from '@/views/baseView';
import axios from 'axios';
import { Component } from 'vue-property-decorator';


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
    // setTimeout(() => {
    
    // }, 1500);
    console.log(localStorage.getItem('token'));
    axios.get('http://localhost:1337/freelancers').then(response => {
      this.items = response.data.filter((t:any) => t.category.name === 'Mobil Yazılım');
    }).catch(error => {
      // Handle error.
      alert("Server'ın çalıştığından veya giriş yaptığınızdan emin olun! \n");
      //console.log('An error occurred:', error.response);
    }).finally(() => this.showLoading(false));
  }




}