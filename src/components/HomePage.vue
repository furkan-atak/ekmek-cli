<template>
  <div style="margin-top: 0.8cm;">
    <v-carousel hide-delimiters :show-arrows="false">   
        <v-carousel-item
          src="https://i.pinimg.com/originals/26/ea/1a/26ea1ae84baf2c11d38b96ef2b420422.gif"
        >
          <v-row style="margin-top: 2%;">
            <span style="margin-left: 5%; margin-top: 15.5%; color: #F5F7FA; font-style: italic; font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif; font-size: 74px;">
             ekmek  </span>
        </v-row>
        <v-row>
         <span style="margin-left: 5.1%; color: white; font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;">
              Alanınla alakalı teklif ver teklif al. İşin görülsün. Ekmeğini kazan. </span>
        </v-row>
        
        </v-carousel-item>    
    </v-carousel>
  <br>
  <br>
  <v-row>          
    <h1 style="padding-left: 5%;"> En Popüler Kategoriler </h1>  
  </v-row>       
    <v-container style="margin-right: 18%; width: 100%;">
      <v-row style="width: 1300px;">
        <template v-for="(item, i) in items">
          <v-col
            :style="i === 0 ? 'margin-left: 5%;' :  'margin-left: 11%;'"
            :key="i"
            cols="12"
            md="1"
          >
            <v-hover v-slot="{ hover }">
              <v-card
                @click="goTo(item.path)"
                style="width: 210px; max-width: 400px; cursor: pointer; margin-left: 4%; margin: 5%;"
                :elevation="hover ? 24 : 2"
                :class="{ 'on-hover': hover }"
              >
                <v-img
                  :src="item.img"
                  height="350px"
                >
                  <v-card-title class="text-h6 white--text">
                    <v-row
                      :elevation="hover ? 24 : 2"
                      class="fill-height flex-column"
                      justify="space-between"
                    >
                      <p :style="hover ? 'text-decoration: underline;' : 'text-decoration:none;'" class="mt-4 subheading text-left">
                        {{ item.title }}
                      </p>
                      <div>
                        <p class="ma-0 text-body-1 font-weight-bold font-italic text-left">
                          {{ item.text }}
                        </p>
                      </div>
                      <div class="align-self-center">
                        <v-btn
                          v-for="(icon, index) in icons"
                          :key="index"
                          :class="{ 'show-btns': hover }"
                          icon
                        >
                        </v-btn>
                      </div>
                    </v-row>
                  </v-card-title>
                </v-img>
              </v-card>
            </v-hover>
          </v-col>
        </template>
      </v-row>
    </v-container>    
   <div style="margin: 2%;"></div>
  </div>
</template>

<script lang="ts" src="./homepage.ts"></script>

<style>
.container {
  position: relative;
  color: black;
}

.top-left {
  position: absolute;
  top: 8px;
  left: 16px;
}
</style>