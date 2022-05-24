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
          @click="goTo('https://github.com/furkan-atak/ekmek-cli')"
          class="mx-4 black--text"
          icon
        >
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
       
Aklınızdaki projeyi açıklamak için hızlı ve kolay formumuzu kullanın. Ne kadar fazla ayrıntı verebilirseniz, o kadar alakalı serbest çalışanları cezbedeceksiniz.

Sitemiz, projeniz için en iyi serbest çalışanlarla eşleştirmek ve onlarla iletişim kurmanızı sağlar. Her serbest çalışan daha sonra kendi özel teklifiyle yanıt verir.

Teklifleri gözden geçirin, serbest çalışanınızı seçin ve projeye başlayın.
        
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
    goTo(path:any) {
      window.open(path);
    }
    icons= [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ];
}
</script>

