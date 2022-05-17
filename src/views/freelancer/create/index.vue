<template>
  <v-container class="containerHalf">
   <div style="margin-left: 6%; margin-right: 6%;">
   <h2 style="font-family: 'Courier New', Courier, monospace; font-size: 40px; color: #2a2a2a;" >Hoşgeldin {{ userName }}</h2>
   <p style="color: #515151;">Küresel serbest çalışan topluluğumuza katılmak için profilinizi tamamlayın ve hizmetlerinizi büyüyen işletme ağımıza satmaya başlayın. </p>
    <v-file-input
        style="width: 50%;"
        :rules="rules"
        accept="image/png, image/jpeg, image/bmp"
        placeholder="Resim Yükle"
        prepend-icon="mdi-camera"
        label="Resim"
    ></v-file-input>
    <br>
    <v-row>
        <v-col>
            <span>Başlık</span>
            <v-text-field outlined style="max-width: 83%;" label="Yazınız" v-model="professionHeader" :rules="theRules"></v-text-field>
        </v-col>
    </v-row>
    <v-row>
        <v-col cols="12" md="6">  
            <span>Uzmanlık Kategorisi</span>
            <v-autocomplete
                    style="max-width: 100%;"
                    v-model="category"
                    :items="categories"
                    item-text="name"
                    item-value="id"
                    outlined
                    dense
                    label="Seç"
            ></v-autocomplete>
        </v-col>  
    </v-row>
    <v-row>
        <v-col cols="12" lg="12">
               <v-card
                style="margin-right: 15%; margin-bottom: 1.5%;"
                width="100%"
                >
                    <v-toolbar
                    v-if="show"
                    flat
                    color="orange accent-4"
                    dark
                    >
                    <v-btn @click="show = false" icon>
                        <v-icon>mdi-close</v-icon>
                    </v-btn>
                    <v-text-field style="margin-top: 3%; color: white;" label="Filtrele" v-model="professionHeader"></v-text-field>
                    </v-toolbar>
                    <v-toolbar v-if="!show"
                    flat
                    color="orange accent-4"
                    dark
                    >
                    <v-btn @click="show = true" icon>
                        <v-icon>mdi-pencil</v-icon>
                    </v-btn>
                    </v-toolbar>
                    <v-card-text>
                    <h2 class="text-h6 mb-2">
                        Yetenekleri Seç
                    </h2>

                    <v-chip-group
                        v-model="amenities"
                        column
                        multiple
                    >
                        <v-chip
                        filter
                        outlined
                        >
                        Elevator
                        </v-chip>
                        <v-chip
                        filter
                        outlined
                        >
                        Washer / Dryer
                        </v-chip>
                        <v-chip
                        filter
                        outlined
                        >
                        Fireplace
                        </v-chip>
                    </v-chip-group>
                    </v-card-text>
                </v-card>  
        </v-col>
    </v-row>
    <v-row style="height: 210px;">
        <v-col>
            <v-span> Hakkında </v-span>
            <v-textarea
            style="padding: 0%;"
            outlined
            name="input-7-4"
            label="Yazınız"
            v-model="about"
            ></v-textarea>
        </v-col>
    </v-row>
    <v-row style="height: 100px;">
        <v-col cols="12" md="6">  
            <span>Konum</span>
            <v-autocomplete
                    style="max-width: 100%; margin-bottom: 10%; "
                    v-model="location"
                    :items="categories"
                    item-text="name"
                    item-value="id"
                    outlined
                    dense
                    label="Seç"
            ></v-autocomplete>
        </v-col>  
    </v-row>
    <v-row>
        <v-col cols="12" md="12">
        <span>Saatlik Ücret</span>
            <v-container style="border: 1px solid gray; width: 35%; height: 50px; margin-right: 75%;">
                <v-row>
                    <v-col style="padding: 6px !important; max-width: 35%; padding-right: 2px;">
                        <v-autocomplete
                                style="box-shadow: none;"
                                v-model="theCurrency"
                                :items="currencies"
                                item-text="text"
                                item-value="val"
                                dense

                        ></v-autocomplete>
                    </v-col>
                    <v-divider vertical color="black" style="min-height: none; min-width: none; height: 48px;">
                    </v-divider>
                    <v-col  style="padding: 0%; height: 15px;">
                         <v-text-field style="padding-top: 0px; padding-left: 3px;" label="" v-model="professionHeader" none></v-text-field>
                    </v-col>
                </v-row>
            </v-container>
        </v-col>
    </v-row>
    </div>
  </v-container>
    
</template>

<script lang="ts" src="./index.ts"></script>


<style>
.containerHalf {
    position: relative;
    right: 50%;
    left: 7%;
    top: 5%;
    height: 80%;
    width: 60%;
    margin-left: 15%;
    margin-bottom: 15%;
    background-color: #F5F7FAFA;
    
}
</style>
