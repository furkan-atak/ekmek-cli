<template>
    
    <div style="width: 100%; height: 100%; background-color: #E9ECF2">
        <br>
        <v-row v-if="project !== null" style="max-height: none; height: 100%;">
            <v-col cols="12" md="8">
            <div style="width: 93%; height: 90%; margin-left: 15%; margin-top: 4%; margin-bottom: 10%; background-color: white;">
                <h2 style="color: #32353B; font-weight: 600; padding: 1%; padding-left: 1%; font-size: 2.42611rem; font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif">
                {{ project.header }} </h2>
                <v-divider style="border-color: #c6c7ca; width: 98%; margin-left: 1% !important;" class="mx-1"></v-divider>
                <span style="color: gray;">
                    <v-icon style="padding: 1%; padding-right: 0%; size: 10%;">mdi-clock-time-three-outline</v-icon>
                    {{ getTimePast(project.createdAt) }}
                    <v-icon style="padding-bottom: 0.5%;">mdi-map-marker-outline</v-icon>Uzaktan &nbsp;&nbsp;
                    <v-icon style="padding-bottom: 0.5%; padding-left: 0%;">mdi-tag</v-icon>
                    Teklifler: {{ project.proposals.length }}&nbsp;&nbsp;
                </span>
                <h3 style="color: gray; font-size: 26px; font-weight: 300;
                    padding: 1.5%; padding-left: 1%;
                    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;"> Açıklama </h3>
                <span style="padding: 1%; color: #707276;"> 
                    {{ project.description }}
                </span>
                <h3 style="color: gray; font-size: 26px; font-weight: 300;
                    padding-top: 3%; padding-left: 1%;
                    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;"> Detay </h3>
                <div style="width: 95%;">
                <p style="padding: 1%; padding-top: 2%; color: #707276;"> 
                   {{ project.detail }}
                </p>
                </div>
            </div>
            </v-col>
            <v-col cols="12" md="4">
                <div style="width: 60%; height: 90.1%; margin-top: 8.1%; margin-left: 5%; background-color: #F8F9FC;">
                        <p style="text-align: center; color: #707276; padding-top: 2%; min-height: none; height: 0%;"> {{ budgetTypeTemplate(project.BudgetType) }} </p>
                        <p style="text-align: center; font-size: 34px; font-weight: 700; color: #707276;"> {{ currencyTemplate(project.Currency) + project.Budget }} </p>
                        <vs-button
                        style="margin-left: 16%; max-width: none; width: 70%; height: 15%; font-size: x-large;"
                        :border="changeStyle"
                        :active="false"
                        @mouseover="changed"
                        @mouseleave="changed"
                        color="#4774B7"
                        square
                        >
                        <i class="bx bxs-paper-plane"></i>
                        TEKLİF VER  
                    </vs-button>
                    <br><br>
                    <v-avatar
                        style="margin-left: 17%; padding-top: 1%;"
                        color="#23395d"
                        size="55"
                        >
                        <img v-if="project.owner.imageUrl" :src="project.owner.imageUrl"> 
                        <span v-if="!project.owner.imageUrl" class="white--text text-h5">{{ nameSurname }}</span>
                    </v-avatar>
                    <span style="margin: 4%; min-height: none; font-size: 20px; font-weight: 600; color: #707276;"> {{ project.owner.username }} </span>
                    <span style="margin-left: 12%; color: darkgrey;"> Proje Sahibi </span>
                    <br>
                    <div style="margin-left: 10%; margin-top: 10%;">
                        <v-icon style="padding-bottom: 0.5%;">mdi-calendar-clock</v-icon>
                        <span style="margin-top: 10%; color: #707276;"> Tahmin Edilen Proje Süresi: </span>
                    </div>
                    <p style="text-align: center; color: grey;"> {{ project.EstimatedDuration }} </p>
                </div>
            </v-col>
        </v-row>
    </div>
</template>

<script lang="ts" src="./index.ts"></script>
