<template>
    <div style="width: 100%; height: 100%; background-color: #F5F7FAFA;">
        <br>
        <div v-if="project !== null" style="width: 60%; height: 70%; margin-left: 11%; margin-top: 4%; background-color: white;">
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
        </div>
    </div>
</template>

<script lang="ts" src="./index.ts"></script>
