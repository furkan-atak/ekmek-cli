<template>
  <v-app>
    <core-app-bar/>
    <core-nav-bar/>
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
  components: {
    CoreAppBar: () => import("@/components/core/AppBar.vue"),
    CoreNavBar: () => import("@/components/core/NavBar.vue")
  },  
  methods: {
    goTo() {
      // sth
  }
  }
});
</script>
