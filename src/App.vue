<template>
  <v-app>
    <v-app-bar
      app
      color="#F5F7FAFA"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          @click="goTo('/')"
          cursor="click"
          alt="Vuetify Logo"
          class="shrink mr-1"
          contain
          src="./assets/logo.png"
          transition="scale-transition"
          width="50"
        />
        <v-img
          @click="goTo('/')"
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
        href="https://github.com/furkan-atak/ekmek-cli"
        target="_blank"
        text
      >
        <span class="mr-2" style="color: orange">Hakkımızda</span>
        <v-icon style="color: orange;">mdi-open-in-new</v-icon>
      </v-btn>
       <vs-button @click="goTo('/login')" flat >Login</vs-button>
      <vs-button>Get Started</vs-button>
      
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator";

export default Vue.extend({
  name: 'App',
  data: () => ({
    //
  }),
  methods: {
    goTo(path: string, query?: any) {
    const url = path.startsWith("/", 0) ? path : "/".concat(path);
    this.$router.push({path: url, query: query});
  }
  }
});
</script>
