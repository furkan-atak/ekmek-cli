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
          <div class="text-h4 pl-12 pt-12">
            Buy Offer
          </div>
        </v-card-title>
        <v-p style="margin: 3%;">
            Search from thousands of skilled freelancers and request proposals
        </v-p>
        <br>
        <v-btn
        style="margin: 2%; margin-left: 32%;"  
        depressed
        color="warning"
        >
        BUY OFFER
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
        <v-card-title class="black--text pl-0 pt-1">
          <div class="text-h4 pl-12 pt-12">
            Find A Freelancer
          </div>
        </v-card-title>
        <v-p style="margin: 3%;">
            Search from thousands of skilled freelancers and request proposals
        </v-p>
        <br>
        <v-btn
        style="margin: 2%; margin-left: 25%;"  
        depressed
        color="warning"
        >
        Find Freelancer
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
            Post A Project
          </div>
        </v-card-title>
        <v-p style="margin: 3%;">
            Search from thousands of skilled freelancers and request proposals
        </v-p>
        <br>
        <v-btn
        style="margin: 2%; margin-left: 28%;"  
        depressed
        color="warning"
        @click="goTo('/post')"
        >
        Post A Project
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
            Be A Freelancer
          </div>
        </v-card-title>
        <v-p style="margin: 3%;">
            Search from thousands of skilled freelancers and request proposals
        </v-p>
        <br>
        <v-btn
        style="margin: 2%; margin-left: 35%;"  
        depressed
        color="warning"
        >
        Be A Freelancer
        </v-btn>
    </v-card>
   </v-col>
  </v-row>
 </div>
      
</template>

<script lang="ts" src="./index.ts"></script>