<template>
  <v-footer
    padless
    absolute
    inset
    app
    height="200"
    footer-transition-property color="primary"  
  >
    <v-card
      flat
      tile
      class="primary -1 black--text text-center"
    >
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4 black--text"
          icon
        >
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
        Bu site isimleri Furkan ATAK ve Yunus Emre ATİK olan 2 Üniversiteli yazılımcı genç tarafından tasarlanmış ve kodlanmıştır. 
        Proje dahilinde "Strapi / Node.js / Vue.js / MongoDB / Heroku" teknolojileri kullanılmıştır.
        Projenin tüm kodları açık kaynak koddur ve HAKKIMIZDA kısmından kodlara ulaşılabilinir.
        
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="black--text">
        {{ new Date().getFullYear() }} — <strong>Ekmek</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script lang="ts">
    import { Component } from 'vue-property-decorator';
    import BaseView from '../../views/baseView';
    @Component
    export default class NavBar extends BaseView{
    constructor() {
        super();
    }
    icons= [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ];
}
</script>

