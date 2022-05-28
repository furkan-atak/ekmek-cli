<template>
    <div>
      <vs-navbar style="z-index: 50; background-color: #ABB2C4; margin-top: 2cm;" fixed center-collapsed v-model="active">
        <vs-navbar-group>
          <p @click="goTo('prog-tech/mobile')" style="height: 10px; margin-top: 2px; color: #18202B;">Yazılım & Teknoloji</p>
          <template #items>
            <vs-navbar-item @click="goTo('prog-tech/web')" :active="active == 'web'" id="web">
              Web Programlama
            </vs-navbar-item>
            <vs-navbar-item @click="goTo('prog-tech/mobile')" :active="active == 'mobil'" id="mobil">
              Mobil Yazılım
            </vs-navbar-item>
            <vs-navbar-item @click="goTo('prog-tech/game')" :active="active == 'oyungelis'" id="oyungelis">
              Oyun Geliştirme
            </vs-navbar-item>
            <vs-navbar-item @click="goTo('prog-tech/desktop')" :active="active == 'masaustu'" id="masaustu">
              Masaüstü Uygulamaları
            </vs-navbar-item>
            <vs-navbar-item @click="goTo('prog-tech/devops')" :active="active == 'devops'" id="devops">
              Geliştirici Operasyonları (DevOps)
            </vs-navbar-item>
            <vs-navbar-item @click="goTo('prog-tech/datascience')" :active="active == 'veribilimi'" id="veribilimi">
              Veri Bilimi
            </vs-navbar-item>
            <vs-navbar-item @click="goTo('prog-tech/hardware')" :active="active == 'donanim'" id="donanim">
              Donanım Destek
            </vs-navbar-item>
            <vs-navbar-item @click="goTo('prog-tech/database')" :active="active == 'veritabani'" id="veritabani">
              Veri Tabanı
            </vs-navbar-item>
            <vs-navbar-item @click="goTo('prog-tech/other-progtech')" :active="active == 'digeryazilim'" id="digeryazilim">
              Diğer Yazılım Teknolojileri
            </vs-navbar-item>            
          </template>
        </vs-navbar-group>

        <vs-navbar-group>
          <p style="height: 10px; margin-top: 2px; color: #18202B;">Çeviri & Yazı</p>
          <template #items>
            <vs-navbar-item @click="goTo('translate-writing/translate')" :active="active == 'ceviri'" id="ceviri">
              Çeviri
            </vs-navbar-item>
            <vs-navbar-item @click="goTo('translate-writing/copywriting')" :active="active == 'metinyazar'" id="metinyazar">
              Metin Yazarlığı
            </vs-navbar-item>
            <vs-navbar-item @click="goTo('translate-writing/cv')" :active="active == 'ozgecmis'" id="ozgecmis">
              Özgeçmiş
            </vs-navbar-item>
            <vs-navbar-item @click="goTo('translate-writing/website-content')" :active="active == 'websiteicerik'" id="websiteicerik">
              İçerik Yazarlığı
            </vs-navbar-item>
            <vs-navbar-item @click="goTo('translate-writing/scenario')" :active="active == 'senaryo'" id="senaryo">
              Senaryo
            </vs-navbar-item>
            <vs-navbar-item @click="goTo('translate-writing/text-editing')" :active="active == 'metinduzen'" id="metinduzen">
              Metin Düzenleme
            </vs-navbar-item>
            <vs-navbar-item @click="goTo('translate-writing/other-translatewriting')" :active="active == 'digerceviri'" id="digerceviri">
              Diğer Çeviri Yazı
            </vs-navbar-item>
          </template>
          
        </vs-navbar-group>
        <vs-navbar-group>
         <p style="height: 10px; margin-top: 2px; color: #18202B;">Grafik & Tasarım</p>

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
          <p style="height: 10px; margin-top: 2px; color: #18202B;">İş & Yönetim</p>

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
          <p style="height: 10px; margin-top: 2px; color: #18202B;">Ses & Müzik</p>

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
    </div>
</template>

<script lang="ts">
    import { Component } from 'vue-property-decorator';
    import BaseView from '../../views/baseView';
    @Component
    export default class NavBar extends BaseView{
    constructor() {
        super();
    }
    active = "";
    data = 12;
    loading = false;
    selection = ""; 
    reserve = "";

    /* eslint-disable */
    goTo(path: string, query?: any) {
        this.navigate(path, query);
    }
}
</script>