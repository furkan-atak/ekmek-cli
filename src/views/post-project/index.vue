<template>
  <v-container class="containerHalf">
   <div style="margin-left: 6%; margin-right: 6%;">
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
        <vs-button v-if="!showDetail" style="margin: 10%; width: 30%; height: 50px; margin-left: 35%; font-size: large;" 
        square
        @click="showRest"
        >
        Devam Et
      </vs-button>
        <div v-if="showDetail">
        <v-row>
            <v-col>
                <span>Proje Başlığı</span>
                <v-text-field outlined style="max-width: 83%;" label="Yazınız" v-model="projectHeader" :rules="rules"></v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <span>Proje Açıklaması</span>
                <v-textarea outlined style="max-width: 83%;" label="Yazınız" v-model="projectDescription"></v-textarea>
            </v-col>
        </v-row>
        <v-row>
        <v-col cols="12" md="6">  
            <span>Bütçe Tipi</span>
            <v-autocomplete
                    style="max-width: 100%;"
                    v-model="theBudgetType"
                    :items="bugdetTypes"
                    item-text="text"
                    item-value="val"
                    outlined
                    dense
                    label="Seç"
            ></v-autocomplete>
        </v-col>
        <v-col cols="12" md="6">  
            <span>Para Birimi</span>
            <v-autocomplete
                    style="max-width: 100%;"
                    v-model="theCurrency"
                    :items="currencies"
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
            <span>Bütçe</span>
            <v-text-field
                    min="0"
                    type="number"
                    style="max-width: 100%;"
                    v-model="budget"
                    item-text="text"
                    item-value="val"
                    outlined
                    dense
                    label="Seç"
            ></v-text-field>
        </v-col>
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
            <vs-button style="margin: 5%; width: 60%; height: 60px; margin-bottom: 35%; right: 5%; font-size: large;" 
                square
                bold
                @click="postProject"
                >
                Proje Yayınla
            </vs-button>
        </v-col>  
        </v-row>
        </div>
    </div>
  </v-container>
    
</template>

<script lang="ts" src="./index.ts"></script>


<style>
.containerHalf {
    position: relative;
    right: 10%;
    top: 20%;
    height: 70%;
    width: 60%;
    margin-left: 15%;
    margin-bottom: 15%;
    background-color: #F5F7FAFA;
    
}

</style>