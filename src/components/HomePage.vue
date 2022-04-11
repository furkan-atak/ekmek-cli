<template>
  <div style="margin-top: 1.5cm;">
    <v-carousel height="%90">   
      <v-carousel-item
        v-for="(item,i) in items"
        :key="i"
        :src="item.src"
        reverse-transition="fade-transition"
        transition="fade-transition"
      ></v-carousel-item>
      
  </v-carousel>
 
  </div>
</template>

<script lang="ts" src="./homepage.ts"></script>
