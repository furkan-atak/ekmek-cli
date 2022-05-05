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
        
        <v-spacer></v-spacer>
        
        
       <v-btn @click="goTo('/intro')"
            target="_blank"
            text
        >
            <span class="mr-2" style="color: grey"><b>Keşfet</b></span>
        </v-btn>
        <vs-button @click="goTo('/login')" flat > &nbsp;Giriş&nbsp;</vs-button>       
        <vs-button @click="goTo('/register')"  >&nbsp;&nbsp;&nbsp;Kaydol&nbsp;&nbsp;</vs-button>
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
    import { Component } from 'vue-property-decorator';
    import BaseView from '../../views/baseView';
    @Component
    export default class AppBar extends BaseView{
    constructor() {
        super();
    }
    

    /* eslint-disable */
    goTo(path: string, query?: any) {
        this.navigate(path, query);
    }
}
</script>


