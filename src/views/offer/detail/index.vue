<template>    
<div v-if="offer !== null" style="width: 100%; height: 100%; background-color: #E9ECF2">
    <br>
    <v-row style="max-height: none; height: 100%;">
        <v-col cols="12" md="8">
        <div style="width: 90%; height: 90%; margin-left: 15%; margin-top: 4%; margin-bottom: 10%; background-color: white;">
            <h2 style="color: #32353B; font-weight: 600; padding: 1%; padding-left: 1%; font-size: 2.42611rem; font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif">
                {{ offer.offerHeader }} </h2>
            <v-img
                :src="offer.imgUrl"
            >
            </v-img>
            <h3 style="color: gray; font-size: 26px; font-weight: 300;
                    padding: 1.5%; padding-left: 1%;
                    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;"> Bu Teklifle Ne Elde Edersiniz? </h3>
                <span style="padding: 1%; color: #707276;"> 
                    {{ 'project.description' }}
                </span>
                <h3 style="color: gray; font-size: 26px; font-weight: 300;
                    padding-top: 3%; padding-left: 1%;
                    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;"> Teklifin Detaylı Açıklaması </h3>
                <div style="width: 95%;">
                <p style="padding: 1%; padding-top: 2%; color: #707276;"> 
                   {{ 'project.detail' }}
                </p>
                </div>
        </div>
        </v-col>
        <v-col cols="12" md="4">
            <div style="width: 60%; height: 90.1%; margin-top: 8.1%; margin-left: 5%; background-color: #F8F9FC;">
                    <p style="text-align: center; color: #707276; padding-top: 2%; min-height: none; height: 0%;"> {{ 'Sadece' }} </p>
                    <p style="text-align: center; font-size: 34px; font-weight: 700; color: #707276;"> {{ currencyTemplate(offer.currency) + offer.fee }} </p>
                    <vs-button
                    style="margin-left: 16%; max-width: none; width: 70%; height: 15%; font-size: x-large;"
                    :border="changeStyle"
                    :active="false"
                    @mouseover="changed"
                    @mouseleave="changed"
                    color="#FF7300"
                    square
                    >
                    <i class="bx bxs-shopping-bag"></i>
                    SATIN AL 
                </vs-button>
                <br><br>
                <v-avatar
                    style="margin-left: 17%; padding-top: 1%;"
                    color="#23395d"
                    size="55"
                    >
                    <img  src="https://vuesax.com/avatars/avatar-4.png"> 
                    <!--- <img v-if="project.owner.imageUrl" :src="project.owner.imageUrl"> 
                    <span v-if="!project.owner.imageUrl" class="white--text text-h5">{{ nameSurname }}</span>> -->
                </v-avatar>
                <span style="margin: 4%; min-height: none; font-size: 20px; font-weight: 600; color: #707276;"> {{ freelancer.name }} </span>
                <span style="margin-left: 12%; color: darkgrey;"> Teklif Sahibi </span>
                <br>
                <div style="margin-left: 10%; margin-top: 10%;">
                    <v-icon style="padding-bottom: 0.5%;">mdi-calendar-clock</v-icon>
                    <span style="margin-top: 10%; color: #707276;"> Teklifin Tahmini Bitiş Süresi: </span>
                </div>
                <p style="text-align: center; color: grey;"> {{ durationTemplate(offer.duration) }} </p>
            </div>
        </v-col>
    </v-row>
</div>
</template>

<script lang="ts" src="./index.ts"></script>
