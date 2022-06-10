import BaseView from '@/views/baseView';
import axios from 'axios';
import { Component } from 'vue-property-decorator';


@Component
export default class HomePage extends BaseView{
  constructor() {
      super();
  }
  butonText = '';
  iconTxt = '';
  texts = ['Yeteneklerin doğrultusunda iş almak hiç bu kadar kolay olmamıştı',
          'Dakikalar içinde para kazanmaya başla',
          '7/24 Ekmek müşteri hizmetleri imkanı',
          'Ücretsiz üyeliğin keyfini sür',
          'Ve daha fazlası için...'];

  icons = ['mdi-rewind', 'mdi-play', 'mdi-fast-forward'];
  items = [
    {
      title: 'Web Programlama',
      text: `Site tasarla ve kodla`,
      img: 'https://github.com/furkan-atak/ekmek-cli/blob/main/src/assets/webprogramlama.jpg?raw=true',
      path: 'prog-tech/web'
    },
    {
      title: 'Metin Yazarlığı',
      text: `İhtiyaca göre metin yaz`,
      img: 'https://github.com/furkan-atak/ekmek-cli/blob/main/src/assets/metinyazarligi.jpg?raw=true',
      path: 'translate-writing/copywriting'
    },
    {
      title: 'Mobil Yazılım',
      text: 'Uygulamanı çıkar',
      img: 'https://github.com/furkan-atak/ekmek-cli/blob/main/src/assets/mobilyazilim.jpg?raw=true',
      path: 'prog-tech/mobile'
    },
    {
      title: 'Senaryo',
      text: 'Özgün senaryolar oluştur',
      img: 'https://github.com/furkan-atak/ekmek-cli/blob/main/src/assets/senaryo.jpg?raw=true',
      path: 'translate-writing/scenario'
    },
    {
      title: 'Veri Bilimi',
      text: 'Verileri anlamlandır',
      img: 'https://github.com/furkan-atak/ekmek-cli/blob/main/src/assets/veribilimi.jpg?raw=true',
      path: 'prog-tech/datascience'
    }  
  ];

  categories:any = [];
  path = '';
    created() {
      if(this.getUser() && this.getUser().role['name'] === 'Freelancer'){
        this.butonText = 'Şimdi Projelere Gözat';
        this.iconTxt = 'mdi-compass';
        this.path = '/project/list';
       }else {
         this.butonText = 'HEMEN FREELANCER OL';
         this.iconTxt = 'mdi-account-check';
         this.path = '/project/list';
       }

      //  this.showLoading(true);
      //  axios.get('http://localhost:1337/categories').then((response:any) => {
      //   response.data.forEach((element:any) => {
      //     axios.get(`http://localhost:1337/offers/count?category=${element.id}`).then(resp => {
      //       this.categories.push({category: element, count: resp.data});
      //      });
      //   });
      //  }).then(() => {this.showLoading(false);});
       
       
    }
    
    /* eslint-disable */
    goTo(path: string, query?: any) {
      this.navigate(path, query);
    }

    compare( a:any, b:any ) {
      if ( a.count < b.count ){
        return -1;
      }
      if ( a.count > b.count ){
        return 1;
      }
      return 0;
    }
    
}
