<template>
    <div v-if="showAll" style="width: 100%; height: %100; background-color: #F8F9FC;">
      <v-row v-if="freelancer === null && offerIdss === null">
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
      <v-row>
        <v-col v-if="freelancer === null  && offerIdss === null" cols="3">
          <div style="width: 90%; height: 80%; background-color: white; margin: 10%; margin-top: 20%; margin-bottom: 23%;
           box-shadow: 10px 10px 15px 10px lightblue; position: sticky; top: 150px;">
            <p style="margin-left: 3%; padding-top: 5%; font-size: 24px; font-weight: 600; color: #18202B;"> Filtreler </p>
            <p style="margin-left: 3%; padding-top: 3%; font-size: 18px; font-weight: 500;"> Teslimat Süresi </p>
            <template v-for="(duration, i) in estimatedDurations">
                <v-row v-if="i > 0" :key="i" height="0">
                  <div style="max-width: none; width: 80%; height: 30px; margin-left: 1.2%;
                  display: flex;">
                    <v-checkbox
                      style="margin-left: 5%; display: inline-block; padding-top: 0px; margin-top: 0%; border-radius: 100%;"
                      v-model="duration.selected"
                      color="orange"
                      hide-details
                    ></v-checkbox> 
                    <v-hover v-slot="{ hover }">
                     <span @click="duration.selected = duration.selected ? false:true" :style=" hover ? 'text-decoration:underline; margin-left: 0%; cursor:pointer; max-height: none; height:100%' :
                      'margin-left: 0%; max-height: none; height:100%; cursor:pointer;'"> {{ duration.text }} </span>
                    </v-hover>
                  </div>
                </v-row>
                </template>
                 <v-divider style="margin-top: 10%; margin-left: 4%; width: 90%; background-color: #ABB2C4;"></v-divider>
                 <p style="margin-left: 3%; padding-top: 3%; font-size: 18px; font-weight: 500;"> Yetenek Ara </p>
                 <v-row style="margin-left: 1%;">   
                    <v-col cols="6" style="margin: 0%; padding: 0px;">
                    <vs-input style="margin-left: 6%; display: inline-block !important;" icon-after v-model="skillKey" placeholder="örn. java"></vs-input>
                    </v-col>
                    <v-col cols="6" style="margin: 0%; padding: 0px;">
                    <vs-button
                      style="max-width: none; width: 35%; max-height: none; height: 90%;"
                      icon
                      color="#FF7300"
                      
                      :active="active == 3" @click="active = 3"
                    >
                      <i class='bx bxs-search-alt-2' ></i>
                    </vs-button>
                  </v-col>
                  </v-row>
                 <v-divider style="margin-top: 10%; margin-left: 4%; width: 90%; background-color: #ABB2C4;"></v-divider>
                 
                 <p style="margin-left: 3%; padding-top: 3%; font-size: 18px; font-weight: 500;"> Yetenek Ara </p>
                 <v-row style="margin-top: 3%; margin-left: 3%;">
                   <v-col cols="4" style="padding-right: 0px; padding-left: 2%;">
                   <template>
                    <v-text-field type="number" outlined placeholder="min">
                    </v-text-field>
                  </template>
                  </v-col>
                  
                  <v-col cols="5" style="padding-left: 1%; padding-right: 0px;">
                    <template>
                    <v-text-field type="number" outlined placeholder="max">
                      <v-icon
                        slot="prepend"
                        color="black"
                      >
                       mdi-minus
                      </v-icon>
                    </v-text-field>
                  </template>
                  </v-col>
                   </v-row>
                   <v-divider style="margin-top: 2%; margin-left: 4%; width: 90%; background-color: #ABB2C4;"></v-divider>
                 <v-row style="margin-left: 0%; margin-top: 3%;">
                   <v-col cols="10">
                   <v-slider
                      hint="Im a hint"
                      v-model="priceFilter"
                      thumb-color="red"
                      thumb-label="always"
                      color="orange darken-3"
                      label="Ortalama Fiyat"
                      max="1000"
                      min="0"
                    ></v-slider>
                    </v-col>
                 </v-row>
            </div>
        </v-col>
        <v-col>
          <v-row>
           <v-container :style="freelancer  && offerIdss === null ? 'padding-top: 0px !important;':''" class="pa-12 text-center">
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
                  @click="navigate(`/offer/detail?id=${item.id}`)"
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
        offerIds: []
    }
})
export default class OfferGeneral extends BaseView{

    offers:any = []; 
    category:any = null;
    theCurrency = '';
    freelancer:any; 
    freelancerId:any = null;
    active = 0;
    priceFilter = 350;

    offerIdss:any = [];

    loading = false;
    selection = "";
    reserve = "";

    skillKey = '';
    showAll = false;

    created() {
        this.loadData();
    }

    currencyTemplate(item:any) {
        return (this.currencies.find(t=> t.val === item.currency)?.text); 
    }

    async loadData() {
        const catId = this.$route.query['id'];
        this.freelancer = null;
        this.freelancerId = this.$route.query['freelancerId'];
        this.offerIdss = this.$props.offerIds;
        if(catId){
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
        }else if(this.freelancerId) {
           axios.get(`http://localhost:1337/freelancers?id=${this.freelancerId}`).then(response => {
              this.freelancer = response.data[0];
              this.offers = this.freelancer.offers;
           }).then(() => this.showAll = true).catch(err => {
             alert(err);
           });
        }else if(this.offerIdss) {
          this.offers = this.offerIdss;
          this.showAll = true;
        }
        
  }

  select(val:any){
    this.estimatedDurations.forEach(t => {
      t.val !== val ? t.selected = false :  t.selected = true;
    })
  }

}
  
</script>


<style>

.vs-input__icon--after {
  right: 60%;
  margin-left: 0%;
}

.vs-input{
  width: 100%;
  margin-right: 0px;
  padding-right: 0px;
  height: 46px; 
}

.vs-input-content{
  margin-right: 0px;
  padding-right: 0px;
  width: 100%;
}

.vs-input-parent {
  width: 100%;
  margin-right: 0px;
  padding-right: 0px;
}

</style>
