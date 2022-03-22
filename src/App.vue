<template>
  <v-app>
    <v-app-bar
      app
      color="#F5F7FAFA"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-1"
          contain
          src="./assets/logo.png"
          transition="scale-transition"
          width="50"
        />
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-1"
          contain
          src="./assets/ekmek.png"
          transition="scale-transition"
          width="150"
        />
      </div>
       
      <v-spacer></v-spacer>
     
      <v-btn
        href="https://github.com/furkan-atak"
        target="_blank"
        text
      >
        <span class="mr-2" style="color: orange">Hakkımızda</span>
        <v-icon style="color: orange;">mdi-open-in-new</v-icon>
      </v-btn>
       <vs-button flat >Login</vs-button>
      <vs-button>Get Started</vs-button>
      
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'App',
  data: () => ({
    //
  }),
});
</script>
