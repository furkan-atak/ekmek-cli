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
    <br>
    <v-row>          
      <h1 style="padding-left: 7%;"> En Popüler Kategoriler </h1>  
    </v-row>       
    <v-container style="margin-right: 21%; width: 100%;">
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
        <vs-button style="background-color: #7b96ff; margin-left: 7%;font-size: medium; width: 14%; height: 30px ;" 
            @click="goTo('/categories')"
            bold
            square
            icon-after
            >
            Tüm Kategoriler &nbsp;   <v-icon style="margin: 1%;" color="white">mdi-arrow-right-bold</v-icon>
          </vs-button>
      </v-row>
    </v-container>    
    <v-container style="margin-right: 18%; width: 100%;">
      <v-row style="width: 1000px;  cursor: pointer; margin-left: 0%; margin-top: 2%;">
        <v-col cols="6" md="6" >
          <h1>
            <br>
            Yeteneklerin doğrultusunda iş almak hiç 
            bu kadar kolay olmamıştı
          </h1> 
          <br>         
          <h5 v-for="(text,i) in texts" :key="i"><v-icon style="margin: 1%;">mdi-account-check</v-icon> {{ text }}</h5>
          <br>
          <vs-button style="background-color: #00ccbe; margin: 0%;font-size: large; width: 90%;" 
            @click="goTo(path)"
            gradient
            bold
            icon-after
            >
            {{ butonText }} &nbsp;   <v-icon dark style="margin: 1%;">{{ iconTxt }}</v-icon>
          </vs-button>
        </v-col>  
        <v-col cols="6" md="1">
          <img style="margin-left: 55%;  max-width: 800px;" src="../assets/freelancerolmalisin.jpg" />  
        </v-col>         
      </v-row>
    </v-container>
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