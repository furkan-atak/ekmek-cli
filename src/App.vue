<template>
  <v-app>
    <core-app-bar/>
    <core-nav-bar/>
    <core-footer/>
    <loading-spinner/>
    <v-main>
      <router-view :key="$route.fullPath"/>
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
  components: {

    CoreAppBar: () => import("@/components/core/AppBar.vue"),
    CoreNavBar: () => import("@/components/core/NavBar.vue"),
    CoreFooter: () => import("@/components/core/Footer.vue"),
    LoadingSpinner: () => import("@/components/core/Spinner.vue")
    
  },
  methods: {
    goTo() {
      // sth
    }
  }
  
});
</script>
