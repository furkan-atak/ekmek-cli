<template>
  <v-container class="containerHalf">
   <div style="margin-left: 6%; margin-right: 6%;">
   <h2> Teklif Oluştur </h2>
   <span style="margin: 3%;"> Teklif: Belirli bir zaman diliminde sabit bir fiyat karşılığında sunabileceğiniz paketlenmiş bir hizmet. </span>
    <br><br><br>
    <v-row>
        <v-col cols="12" md="7">
            <span>Teklifiniz </span>
            <v-text-field outlined style="max-width: 100%;" label="örn. Sizin için web sitesi tasarlayabilirim ücreti ise sadece" v-model="offerHeader" :rules="rules"></v-text-field>
        </v-col>
        <v-col>
            <v-text-field outlined style="margin-top: 20%;" type="number" min="0" label="ücret">  </v-text-field>
        </v-col>
        
        <v-col cols="12" md="3">  
            <v-row>
                <span style="margin: 5%; margin-left: 5%;"> Birim </span>
            </v-row>
            <v-btn
                @click="setCurrency(item);"
                v-for="(item,i) in currencies"
                :key="i"
                elevation="2"
                fab
                :color="item === theCurrency ? 'primary' : ''"
                style="font-size: larger; margin: 1%; font-size: larger; margin: 1%;"
            > {{ item.symbol }} </v-btn>   
        </v-col>  
    </v-row>
    <v-row>
        <v-col cols="12" md="6">  
            <span>Kategoriler</span>
            <v-autocomplete
                    style="max-width: 100%;"
                    v-model="category"
                    :items="categories"
                    @change="setSubCategory"
                    item-text="name"
                    item-value="id"
                    :rules ="valid"
                    outlined
                    dense
                    label="Seç"
            ></v-autocomplete>
        </v-col>
        <v-col cols="12" md="6">  
            <span>Alt Kategori</span>
            <v-autocomplete
                    :disabled="category <= 0" 
                    style="max-width: 100%;"
                    v-model="subCategory"
                    :items="subCategories"
                    item-text="name"
                    item-value="id"
                    :rules ="valid"
                    outlined
                    dense
                    label="Seç"
            ></v-autocomplete>
        </v-col>  
        </v-row>
        <v-row>
            <v-col>
                <span>Teklifinizi Detaylandırın</span>
                <v-textarea outlined style="max-width: 83%;" label="Yazınız" v-model="offerDescription"></v-textarea>
            </v-col>
        </v-row>
        <v-row>
        <v-col cols="12" md="6">  
            <span>Tahmini Proje Süresi</span>
            <v-autocomplete
                    style="max-width: 100%;"
                    v-model="theEstimatedDuration"
                    :items="estimatedDurations"
                    item-text="text"
                    item-value="val"
                    outlined
                    dense
                    label="Seç"
            ></v-autocomplete>
        </v-col>  
        </v-row>
        <v-row>
        <v-col cols="12" md="6">  
            <vs-button style="margin: 5%; width: 60%; height: 60px; margin-bottom: 35%; left: 65%; margin-bottom: 35%; font-size: large;" 
                square
                bold
                gradient
                color="rgb(59,222,200)"
                @click="postOffer"
                >
                <i class="bx bxs-paper-plane"></i>
                Teklif Oluştur
            </vs-button>
        </v-col>  
        </v-row>
    </div>
  </v-container>
    
</template>

<script lang="ts" src="./index.ts"></script>


<style scoped>
.containerHalf {
    position: relative;
    right: 10%;
    top: 10%;
    height: 70%;
    width: 65%;
    margin-left: 15%;
    margin-bottom: 15%;
    background-color: #F5F7FAFA;
    
}
</style>