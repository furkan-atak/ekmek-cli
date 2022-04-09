<template>
  <v-app>
    
    <core-app-bar></core-app-bar>
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
    CoreAppBar: () => import("@/components/core/AppBar.vue")
  },  
  methods: {
    goTo(path: string, query?: any) {
    const url = path.startsWith("/", 0) ? path : "/".concat(path);
    this.$router.push({path: url, query: query});
  }
  }
});
</script>
