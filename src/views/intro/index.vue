<template>
    <div>
    <br>
    <br>
  <v-row style="margin: 3%">
   <v-col>
      <v-card
        outlined color="transparent"
        max-width="375"
        class="mx-auto"
        >
        <v-img
        max-width="15rem"
        style="margin-left: 13%;"
        src="https://d1a29h5kxv3oc2.cloudfront.net/dist/img/icon-shopping-basket.290f68e2c0cf75dc014a0c52815f48d2.png"
        dark
        >
        <v-row class="fill-height">
            <v-card-title>
            <v-btn
                dark
                icon
            >
            </v-btn>

            <v-spacer></v-spacer>
            </v-card-title>

            <v-spacer></v-spacer>
            <v-card-title class="white--text pl-12 pt-12">
            </v-card-title>
        </v-row>
        </v-img>
        <v-card-title class="black--text pl-9 pt-1">
          <div class="text-h4 pl-6 pt-12">
            Teklifleri Gör
          </div>
        </v-card-title>
            Sabit fiyat tekliflerimizle projenizi 1 saat gibi 
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;kısa bir sürede tamamlayın!

        <br>
        <v-btn
        style="margin: 2%; margin-left: 22%;"  
        depressed
        color="warning"
        >
        TEKLİFLERİ GÖR
        </v-btn>
    </v-card>
   </v-col>
   <v-divider
    vertical
    ></v-divider>
    <v-col>
      <v-card
        outlined color="transparent"
        max-width="375"
        class="mx-auto"
        >
        <v-img
        max-width="15rem"
        style="margin-left: 15%;"
        src="https://d1a29h5kxv3oc2.cloudfront.net/dist/img/icon-search.4fe0faf339b2563db0dcc5c229abc0fe.png"
        dark
        >
        <v-row class="fill-height">
            <v-card-title>
            <v-btn
                dark
                icon
            >
            </v-btn>

            <v-spacer></v-spacer>
            </v-card-title>

            <v-spacer></v-spacer>
            <v-card-title class="white--text pl-12 pt-12">
            </v-card-title>
        </v-row>
        </v-img>
        <v-card-title class="black--text pl-2 pt-1">
          <div class="text-h4 pl-12 pt-12">
            Freelancer Bul
          </div>
        </v-card-title>
        <v-p style="margin: 1%;">
            Binlerce freelancer arasından arama yapın ve 
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            teklif isteyin!
        </v-p>
        <br>
        <v-btn
        style="margin: 2%; margin-left: 23%;"  
        depressed
        color="warning"
        >
        FREELANCER BUL
        </v-btn>
    </v-card>
   </v-col>
   <v-divider
    vertical
    ></v-divider>
    <v-col>
      <v-card
        outlined color="transparent"
        max-width="375"
        class="mx-auto"
        >
        <v-img
        max-width="15rem"
        style="margin-left: 15%;"
        src="https://d1a29h5kxv3oc2.cloudfront.net/dist/img/icon-post-job.ad1ea79972aa97515e200eb243e0c945.png"
        dark
        >
        <v-row class="fill-height">
            <v-card-title>
            <v-btn
                dark
                icon
            >
            </v-btn>

            <v-spacer></v-spacer>
            </v-card-title>

            <v-spacer></v-spacer>
            <v-card-title class="white--text pl-12 pt-12">
            </v-card-title>
        </v-row>
        </v-img>
        <v-card-title class="black--text pl-6 pt-1">
          <div class="text-h4 pl-12 pt-12">
            Proje Yayınla
          </div>
        </v-card-title>
        <v-p style="margin: 3%;">
            Yapmak istediğin projeyi sun, anında ilgili &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;freelancer'larımız teklif versin!
        </v-p>
        <br>
        <v-btn
        style="margin: 2%; margin-left: 28%;"  
        depressed
        color="warning"
        @click="goTo('/post')"
        >
        PROJE YAYINLA
        </v-btn>
    </v-card>
   </v-col>
   <v-divider
    vertical
    ></v-divider>
    <v-col>
      <v-card
        outlined color="transparent"
        max-width="375"
        class="mx-auto"
        >
        <v-img
        max-width="15rem"
        style="margin-left: 18%;"
        src="https://d1a29h5kxv3oc2.cloudfront.net/dist/img/icon-search.4fe0faf339b2563db0dcc5c229abc0fe.png"
        dark
        >
        <v-row class="fill-height">
            <v-card-title>
            <v-btn
                dark
                icon
            >
            </v-btn>

            <v-spacer></v-spacer>
            </v-card-title>

            <v-spacer></v-spacer>
            <v-card-title class="white--text pl-12 pt-12">
            </v-card-title>
        </v-row>
        </v-img>
        <v-card-title class="black--text pl-4 pt-1">
          <div class="text-h4 pl-12 pt-12">
            {{ header }}
          </div>
        </v-card-title>
           {{ subHeader }}
        <br>
        <v-btn
        style="margin: 2%; margin-left: 27%;"
        @click="goTo('/freelancer/create')"  
        depressed
        color="warning"
        >
         {{ header.toLocaleUpperCase('tr') }}
        </v-btn>
    </v-card>
   </v-col>
  </v-row>
 </div>
      
</template>

<script lang="ts" src="./index.ts"></script>