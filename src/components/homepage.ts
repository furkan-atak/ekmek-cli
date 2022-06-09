import BaseView from '@/views/baseView';
import { Component } from 'vue-property-decorator';


@Component
export default class HomePage extends BaseView{
  constructor() {
      super();
  }
  a = false;
  active = 0;
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

freelancerol1 ="Yeteneklerin doğrultusunda iş almak hiç bu kadar kolay olmamıştı";
freelancerol2 ="Dakikalar içinde para kazanmaya başla";
freelancerol3 ="7/24 Ekmek müşteri hizmetleri imkanı";
freelancerol4 ="Ücretsiz üyeliğin keyfini sür";
freelancerol5 ="Ve daha fazlası için...";
freelancerol6 ="HEMEN FREELANCER OL";

projeeyayinla1 ="Aklında olan fikrYeteneklerin doğrultusunda iş almak hiç bu kadar kolay olmamıştı";
projeeyayinla2 ="Dakikalar içinde para kazanmaya başla";
projeeyayinla3 ="7/24 Ekmek müşteri hizmetleri imkanı";
projeeyayinla4 ="Ücretsiz üyeliğin keyfini sür";
projeeyayinla5 ="Ve daha fazlası için...";
projeeyayinla6 ="HEMEN FREELANCER OL";

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

    /* eslint-disable */
    goTo(path: string, query?: any) {
      this.navigate(path, query);
    }
    
}
