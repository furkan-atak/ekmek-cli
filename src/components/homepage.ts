import BaseView from '@/views/baseView';
import { Component } from 'vue-property-decorator';


@Component
export default class HomePage extends BaseView{
  constructor() {
      super();
  }
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

  
icons = ['mdi-rewind', 'mdi-play', 'mdi-fast-forward'];
items = [
      {
        title: 'Web Programlama',
        text: `Site tasarla ve kodla`,
        img: 'https://github.com/furkan-atak/ekmek-cli/blob/main/src/assets/web.png?raw=true',
        path: 'prog-tech/web'
      },
      {
        title: 'Metin Yazarlığı',
        text: `İhtiyaca göre metin yaz`,
        img: 'https://www.datocms-assets.com/26717/1602927452-seo-uzmani-seo-metin-yazarligi.jpg',
        path: 'translate-writing/copywriting'
      },
      {
        title: 'Mobil Yazılım',
        text: 'Uygulamanı çıkar',
        img: 'https://github.com/furkan-atak/ekmek-cli/blob/main/src/assets/mobile.png?raw=true',
        path: 'prog-tech/mobile'
      },
      {
        title: 'Senaryo',
        text: 'Özgün senaryolar oluştur',
        img: 'https://dckozmos.com/wp-content/uploads/2019/09/Senaryo-Yazarl%C4%B1g%CC%86%C4%B1-.png',
        path: 'translate-writing/scenario'
      },
      {
        title: 'Veri Bilimi',
        text: 'Verileri anlamlandır',
        img: 'https://github.com/furkan-atak/ekmek-cli/blob/main/src/assets/veribilimi.png?raw=true',
        path: 'prog-tech/datascience'
      },
      {
        title: 'İçerik Yazıcılığı',
        text: 'Site içeriğini doldur',
        img: 'https://w7.pngwing.com/pngs/51/923/png-transparent-website-content-writer-content-writing-services-business-search-engine-optimization-content-marketing-text.png',
        path: 'translate-writing/website-content'
      },
    ];
    transparent = 'rgba(255, 255, 255, 0)';

    /* eslint-disable */
    goTo(path: string, query?: any) {
      this.navigate(path, query);
  }
}
