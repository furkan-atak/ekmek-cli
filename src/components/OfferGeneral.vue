<template>
    <div v-if="showAll">
      <v-row>
      <div style="width: 100%; height: 200px; margin-top: 2.5%; background-color: rgb(24, 32, 43);">
        <v-row style="margin-top: 2%;">
            <h1 style="margin-left: 10%; margin-top: 3%; color: #F5F7FA; font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif; font-weight: 500;">
             {{ category ? category.name : 'Yüksek Kaliteli Freelancer Hizmeti ve Teklifleri Alın' }}  </h1>
        </v-row>
        <v-row>
          <span style="margin-left: 10.3%; color: #ABB2C4; font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;">
            {{  category ? category.subHeader : 'Teklifler ve hizmetler mi arıyorsunuz? Ekmek sizinle.' }} </span>
        </v-row>
      </div>
      </v-row>
      <br><br>
      <br><br>
      <v-row>
        <v-col cols="3"></v-col>
        <v-col>
          <v-row>
           <v-container class="pa-12 text-center">
            <v-row
              class="fill-height"
              justify="center"
            >
              <template v-for="(item, i) in offers">
                <v-col
                  style="padding-left: 0%; padding-right: 0.5%;"
                  :key="i"
                  cols="12"
                  md="4"
                >            
                <v-card
                  :loading="loading"
                  class="mx-auto my-12"
                  max-width="374"
                >
                  <template slot="progress">
                    <v-progress-linear
                      color="deep-purple"
                      height="10"
                      indeterminate
                    ></v-progress-linear>
                  </template>

                  <v-img
                    height="250"
                    :src="item.imgUrl"
                  ></v-img>

                  <v-card-title> {{ item.offerHeader }} </v-card-title>

                  <v-card-text>
                    <div> {{ item.offerDetails }} </div><br>
                    <!-- <v-row
                      class="mx-0"
                    >
                      <v-rating
                        :value=" item.starPoint "
                        color="amber"
                        dense
                        half-increments
                        readonly
                        size="14"
                      ></v-rating>

                      <div class="grey--text ms-4">
                        {{ item.starPoint }} (413)
                      </div>
                    </v-row> -->

                    <div class="my-3 text-subtitle-1">
                      Fiyat: {{ item.fee }} {{ currencyTemplate(item) }}
                    </div>
                  </v-card-text>

                  <v-divider class="mx-4"></v-divider>

                  <v-card-title>Offer Related Skills</v-card-title>

                  <v-card-text>
                    <v-chip-group
                      v-model="selection"
                      active-class="deep-purple accent-4 white--text"
                      column
                    >
                      <v-chip>C++</v-chip>

                      <v-chip>JAVA</v-chip>

                      <v-chip>Pthon</v-chip>

                      <v-chip>SQL</v-chip>
                    </v-chip-group>
                  </v-card-text>

                  <v-card-actions>
                    <v-btn
                      color="deep-purple lighten-2"
                      text
                      @click="reserve"
                    >
                      Reserve
                    </v-btn>
                  </v-card-actions>
                </v-card>
          </v-col>
        </template>
      </v-row>
    </v-container>
    </v-row>
  </v-col>       
</v-row>
</div>
</template>

<script lang="ts">
import BaseView from '@/views/baseView';
import axios from 'axios';
import Component from 'vue-class-component';

@Component({
    props:{
        categoryId: String
    }
})
export default class OfferGeneral extends BaseView{

    offers:any = []; 
    category:any = null;
    theCurrency = '';

    loading = false;
    selection = "";
    reserve = "";

    showAll = false;

    created() {
        this.loadData();
    }

    currencyTemplate(item:any) {
        return (this.currencies.find(t=> t.val === item.currency)?.text); 
    }

    async loadData() {
        const catId = this.$route.query['id']
        const endPoint =  catId ? `http://localhost:1337/offers?category=${catId}` : `http://localhost:1337/offers`;  
        this.showLoading(true);
        axios.get(endPoint).then(response => {
                    this.offers = response.data;
                    this.category = catId ? this.offers[0].category : null;
                }).then(() => this.showAll = true).catch(error => {
                // Handle error.
                alert("Server'ın çalıştığından veya giriş yaptığınızdan emin olun! \n");
                //console.log('An error occurred:', error.response);
                }).finally(() => { this.showLoading(false) });

        
        
  }

}
  
</script>
