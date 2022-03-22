<template>
    <div class="center examplex">
      <vs-navbar center-collapsed v-model="active">
        <vs-navbar-group>
          Yazılım & Teknoloji
          <template #items>
            <vs-navbar-item @click="goTo('prog-tech/programming')" :active="active == 'web'" id="web">
              Web Programlama
            </vs-navbar-item>
            <vs-navbar-item @click="goTo('prog-tech/programming')" :active="active == 'mobil'" id="mobil">
              Mobil Yazılım
            </vs-navbar-item>
            <vs-navbar-item @click="goTo('prog-tech/programming')" :active="active == 'oyungelis'" id="oyungelis">
              Oyun Geliştirme
            </vs-navbar-item>
            <vs-navbar-item @click="goTo('prog-tech/programming')" :active="active == 'masaustu'" id="masaustu">
              Masaüstü Uygulamaları
            </vs-navbar-item>
            <vs-navbar-item @click="goTo('prog-tech/programming')" :active="active == 'devops'" id="devops">
              Geliştirici Operasyonları (DevOps)
            </vs-navbar-item>
            <vs-navbar-item @click="goTo('prog-tech/programming')" :active="active == 'veribilimi'" id="veribilimi">
              Veri Bilimi
            </vs-navbar-item>
            <vs-navbar-item @click="goTo('prog-tech/programming')" :active="active == 'donanim'" id="donanim">
              Donanım Destek
            </vs-navbar-item>
            <vs-navbar-item @click="goTo('prog-tech/programming')" :active="active == 'veritabani'" id="veritabani">
              Veri Tabanı
            </vs-navbar-item>
            <vs-navbar-item @click="goTo('prog-tech/programming')" :active="active == 'digeryazilim'" id="digeryazilim">
              Diğer Yazılım Teknolojileri
            </vs-navbar-item>            
          </template>
        </vs-navbar-group>

        <vs-navbar-group>
          Çeviri & Yazı

          <template #items>
            <vs-navbar-item @click="goTo('prog-tech/programming')" :active="active == 'ceviri'" id="ceviri">
              Çeviri
            </vs-navbar-item>
            <vs-navbar-item @click="goTo('prog-tech/programming')" :active="active == 'metinyazar'" id="metinyazar">
              Metin Yazarlığı
            </vs-navbar-item>
            <vs-navbar-item @click="goTo('prog-tech/programming')" :active="active == 'ozgecmis'" id="ozgecmis">
              Özgeçmiş
            </vs-navbar-item>
            <vs-navbar-item @click="goTo('prog-tech/programming')" :active="active == 'websiteicerik'" id="websiteicerik">
              Web Sitesi İçeriği
            </vs-navbar-item>
            <vs-navbar-item @click="goTo('prog-tech/programming')" :active="active == 'senaryo'" id="senaryo">
              Senaryo
            </vs-navbar-item>
            <vs-navbar-item @click="goTo('prog-tech/programming')" :active="active == 'metinduzen'" id="metinduzen">
              Metin Düzenleme
            </vs-navbar-item>
            <vs-navbar-item @click="goTo('prog-tech/programming')" :active="active == 'digerceviri'" id="digerceviri">
              Diğer Çeviri Yazı
            </vs-navbar-item>
          </template>
          
        </vs-navbar-group>
        <vs-navbar-group>
         Grafik & Tasarım

          <template #items>
           <vs-navbar-item @click="goTo('prog-tech/programming')" :active="active == 'logo'" id="logo">
              Logo Tasarım
            </vs-navbar-item>
            <vs-navbar-item @click="goTo('prog-tech/programming')" :active="active == '3d'" id="3d">
              3D Tasarım
            </vs-navbar-item>
            <vs-navbar-item @click="goTo('prog-tech/programming')" :active="active == 'brosur'" id="brosur">
              Broşür Katalog Tasarımı
            </vs-navbar-item>
            <vs-navbar-item @click="goTo('prog-tech/programming')" :active="active == 'animasyon'" id="animasyon">
              Animasyon
            </vs-navbar-item>
            <vs-navbar-item @click="goTo('prog-tech/programming')" :active="active == 'karikatur'" id="karikatur">
              Karikatür
            </vs-navbar-item>
            <vs-navbar-item @click="goTo('prog-tech/programming')" :active="active == 'oyuntasarim'" id="oyuntasarim">
              Oyun Tasarımı
            </vs-navbar-item>
            <vs-navbar-item @click="goTo('prog-tech/programming')" :active="active == 'digergrafik'" id="digergrafik">
              Diğer Grafik Tasarım
            </vs-navbar-item>
          </template>
          
        </vs-navbar-group>
        <vs-navbar-group>
          İş & Yönetim

          <template #items>
            <vs-navbar-item @click="goTo('prog-tech/programming')" :active="active == 'eticaret'" id="eticaret">
              E-Ticaret Yönetimi
            </vs-navbar-item>
            <vs-navbar-item @click="goTo('prog-tech/programming')" :active="active == 'danismanlik'" id="danismanlik">
              Danışmanlıklar
            </vs-navbar-item>
            <vs-navbar-item @click="goTo('prog-tech/programming')" :active="active == 'reklam'" id="reklam">
              Reklam Yönetimi
            </vs-navbar-item>
            <vs-navbar-item @click="goTo('prog-tech/programming')" :active="active == 'sosyalmedya'" id="sosyalmedya">
              Sosyal Medya Yönetimi
            </vs-navbar-item>
            <vs-navbar-item @click="goTo('prog-tech/programming')" :active="active == 'seo'" id="seo">
              Arama Motoru Optimizasyonu (SEO)
            </vs-navbar-item>
            <vs-navbar-item @click="goTo('prog-tech/programming')" :active="active == 'digeris'" id="digeris">
              Diğer İş Yönetim
            </vs-navbar-item>
          </template>
          
        </vs-navbar-group>

        <vs-navbar-group>
          Ses & Müzik

          <template #items>
            <vs-navbar-item @click="goTo('prog-tech/programming')" :active="active == 'seslendirme'" id="seslendirme">
              Seslendirme
            </vs-navbar-item>
            <vs-navbar-item @click="goTo('prog-tech/programming')" :active="active == 'mix'" id="mix">
              Mix Mastering
            </vs-navbar-item>
            <vs-navbar-item @click="goTo('prog-tech/programming')" :active="active == 'beste'" id="beste">
              Beste Yazarlığı
            </vs-navbar-item>
            <vs-navbar-item @click="goTo('prog-tech/programming')" :active="active == 'vokal'" id="vokal">
              Vokal Koçluğu
            </vs-navbar-item>
            <vs-navbar-item @click="goTo('prog-tech/programming')" :active="active == 'muzik'" id="muzik">
              Müzik Yapma
            </vs-navbar-item>
            <vs-navbar-item @click="goTo('prog-tech/programming')" :active="active == 'digerses'" id="digerses">
              Diğer Ses Müzik
            </vs-navbar-item>
          </template>
          
        </vs-navbar-group>
      </vs-navbar>
      <br><br>
      <br><br>
      <v-row>
        <v-col cols="3"></v-col>
        <v-col>
          <v-row >            
          <vs-card style="margin:10px;">
            <template #title>
              <h3>Web Programlama</h3>
            </template>
            <template #img>
              <img src="../assets/web.png" alt="">
            </template>
            <template #text>
              <p>
                Web Programlamayla alakalı html, php, javascript vb. tüm yazılım dillerindeki iş ilanlarını içermektedir.
              </p>
            </template>
            <template #interactions>
              <vs-button danger icon>
                <i class='bx bx-heart'></i>
              </vs-button>
              <vs-button class="btn-chat" shadow primary>
                <i class='bx bx-chat' ></i>
                <span class="span">
                  17 İş İlanı
                </span>
              </vs-button>
            </template>
          </vs-card>
          <vs-card style="margin:10px;">
            <template #title>
              <h3>Mobil Yazılım</h3>
            </template>
            <template #img>
              <img src="../assets/mobile.png" alt="">
            </template>
            <template #text>
              <p>
                Mobil Yazılım, Swift, AndroidStudio vb. işlerini barındırmaktadır.
              </p>
            </template>
            <template #interactions>
              <vs-button danger icon>
                <i class='bx bx-heart'></i>
              </vs-button>
              <vs-button class="btn-chat" shadow primary>
                <i class='bx bx-chat' ></i>
                <span class="span">
                  23 İş İlanı
                </span>
              </vs-button>
            </template>
          </vs-card>
          <vs-card style="margin:10px;">
            <template #title>
              <h3>Oyun Geliştirme</h3>
            </template>
            <template #img>
              <img src="../assets/game.png" alt="">
            </template>
            <template #text>
              <p>
                Oyun geliştirmesinde Unreal Engine, Unity vb. diğer tüm yazılım dillerini içermektedir.
              </p>
            </template>
            <template #interactions>
              <vs-button danger icon>
                <i class='bx bx-heart'></i>
              </vs-button>
              <vs-button class="btn-chat" shadow primary>
                <i class='bx bx-chat' ></i>
                <span class="span">
                  9 İş İlanı
                </span>
              </vs-button>
            </template>
          </vs-card>
          <vs-card style="margin:10px;">
            <template #title>
              <h3>Masaüstü Uygulamalar</h3>
            </template>
            <template #img>
              <img src="../assets/masaustu.png" alt="">
            </template>
            <template #text>
              <p>
                Masaüstü uygulamlarında C++, C# , Java gibi platformlarda yazılan uygulamarı barındırır.
              </p>
            </template>
            <template #interactions>
              <vs-button danger icon>
                <i class='bx bx-heart'></i>
              </vs-button>
              <vs-button class="btn-chat" shadow primary>
                <i class='bx bx-chat' ></i>
                <span class="span">
                  35 İş İlanı
                </span>
              </vs-button>
            </template>
          </vs-card>
          <vs-card style="margin:10px;">
            <template #title>
              <h3>Geliştirici Operasyonları (DevOps)</h3>
            </template>
            <template #img>
              <img src="../assets/devops.png" alt="">
            </template>
            <template #text>
              <p>
                Yazılım geliştiriken gerekli tüm aşamaları istişare etmek için DevOps.
              </p>
            </template>
            <template #interactions>
              <vs-button danger icon>
                <i class='bx bx-heart'></i>
              </vs-button>
              <vs-button class="btn-chat" shadow primary>
                <i class='bx bx-chat' ></i>
                <span class="span">
                  86 İş İlanı
                </span>
              </vs-button>
            </template>
          </vs-card>
          <vs-card style="margin:10px;">
            <template #title>
              <h3>Veri Bilimi</h3>
            </template>
            <template #img>
              <img src="../assets/veribilimi.png" alt="">
            </template>
            <template #text>
              <p>
                Bilimsel yöntemleri, süreçleri, algoritmaları ve sistemleri kullanarak problemleri çöz.
              </p>
            </template>
            <template #interactions>
              <vs-button danger icon>
                <i class='bx bx-heart'></i>
              </vs-button>
              <vs-button class="btn-chat" shadow primary>
                <i class='bx bx-chat' ></i>
                <span class="span">
                  42 İş İlanı
                </span>
              </vs-button>
            </template>
          </vs-card>
          <vs-card style="margin:10px;">
            <template #title>
              <h3>Donanım Destek</h3>
            </template>
            <template #img>
              <img src="../assets/donanim.jpg" alt="">
            </template>
            <template #text>
              <p>
                Her türlü donanım sorunlarınızın çözümünü içeren alan.
              </p>
            </template>
            <template #interactions>
              <vs-button danger icon>
                <i class='bx bx-heart'></i>
              </vs-button>
              <vs-button class="btn-chat" shadow primary>
                <i class='bx bx-chat' ></i>
                <span class="span">
                  42 İş İlanı
                </span>
              </vs-button>
            </template>
          </vs-card>
          <vs-card style="margin:10px;">
            <template #title>
              <h3>Veri Tabanı</h3>
            </template>
            <template #img>
              <img src="../assets/veritabani.jpg" alt="">
            </template>
            <template #text>
              <p>
                Bilgisayarda bilgi depolama ve bilgiye erişim konularında yeni yöntemleri barındırır.
              </p>
            </template>
            <template #interactions>
              <vs-button danger icon>
                <i class='bx bx-heart'></i>
              </vs-button>
              <vs-button class="btn-chat" shadow primary>
                <i class='bx bx-chat' ></i>
                <span class="span">
                  42 İş İlanı
                </span>
              </vs-button>
            </template>
          </vs-card>
          <vs-card style="margin:10px;">
            <template #title>
              <h3>Diğer Yazılım Teknolojileri</h3>
            </template>
            <template #img>
              <img src="../assets/diger.png" alt="">
            </template>
            <template #text>
              <p>
                Belirtilen alanlar dışında iş ilanlarını barındırır.
              </p>
            </template>
            <template #interactions>
              <vs-button danger icon>
                <i class='bx bx-heart'></i>
              </vs-button>
              <vs-button class="btn-chat" shadow primary>
                <i class='bx bx-chat' ></i>
                <span class="span">
                  42 İş İlanı
                </span>
              </vs-button>
            </template>
          </vs-card>


        </v-row>
        </v-col>
        
        </v-row>
    </div>
</template>

<script lang="ts" src="./hello.ts"></script>
