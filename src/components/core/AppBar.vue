<template>
    <v-app-bar
        app
        color="#F5F7FAFA"
        dark
        >
        <div class="d-flex align-center">
            <v-img
            @click="goTo('/')"
            style="cursor: pointer;"
            alt="Vuetify Logo"
            class="shrink mr-1"
            contain
            src="../../assets/logo.png"
            transition="scale-transition"
            width="50"
            />
            <v-img
            @click="goTo('/')"
            style="cursor: pointer;"
            alt="Vuetify Logo"
            class="shrink mr-1"
            contain
            src="../../assets/ekmek.png"
            transition="scale-transition"
            width="150"
            />
        </div>
        
        <v-btn @click="logout"
            target="_blank"
            text
        > 
        <span  class="mr-2" style="color: rgb(52, 168, 202); font-weight: 600; margin:1%">LOG OUT</span>
        </v-btn>
        <v-spacer></v-spacer>
        
        
       <v-btn @click="goTo('/intro')"
            target="_blank"
            text
        > 
        <span class="mr-2" style="color: rgb(52, 168, 202); font-weight: 600; margin:1%">Keşfet</span>
        </v-btn>
        <v-divider
        vertical
        color="lightgray"
        ></v-divider>
        <v-btn @click="goTo('/login')"
            target="_blank"
            text
        >  
        <span class="mr-2" style="color: orange; margin: 1%; font-weight: 600;">&nbsp;Gİrİş&nbsp;</span>
        </v-btn>
        <v-divider
        vertical
        color="lightgray"
        ></v-divider>
        <v-btn @click="goTo('/register')"
            target="_blank"
            text
        >        
        <span style="margin: 1%; color: rgb(52, 168, 202); font-weight: 600;">&nbsp;Kaydol&nbsp;&nbsp;</span>
        </v-btn>
        <v-divider
        vertical
        color="lightgray"
        ></v-divider> 
        <v-btn
            href="https://github.com/furkan-atak/ekmek-cli"
            target="_blank"
            text
        > 
            <span class="mr-2" style="color: orange">Hakkımızda</span>
            <v-icon style="color: orange;">mdi-open-in-new</v-icon>
        </v-btn>
    </v-app-bar>
</template>    

<script lang="ts">
    import axios from 'axios';
    import { Component } from 'vue-property-decorator';
    import BaseView from '../../views/baseView';
    @Component
    export default class AppBar extends BaseView{
    constructor() {
        super();
    }
  
    logout() {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        this.navigate('/');
        location.reload();
        this.goTo('/');
    }

    /* eslint-disable */
    goTo(path: string, query?: any) {
        this.navigate(path, query);
    }
}
</script>


