<template>
    <v-app-bar
        app
        color="#F5F7FAFA"
        dark
        height="80px"
        >
        <div style="margin-left: 1.3%;" class="d-flex align-center">
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
        
        <vs-button style="background-color: #004b55; margin: 2%;font-size: large; width: 7%;" 
            @click="goTo('/intro')"
            gradient
            warn
            square
            bold
            icon-after
            >
            
            Keşfet <v-icon style="margin: 1%;">mdi-magnify</v-icon>
        </vs-button>

        <v-divider
        :style="loggedIn ? 'margin-right: 0.6%;' : ''"
        vertical
        color="lightgray"
        ></v-divider>

        <vs-button style="background-color: #203354; margin: 2%;font-size: large; width: 7%;" 
            @click="goTo('/project/list')"
            gradient
            primary
            square
            bold
            icon-after
            >
            
            Projeler <v-icon style="margin: 1%;">mdi-layers-search</v-icon>
        </vs-button>

        <v-divider
        :style="loggedIn ? 'margin-right: 0.6%;' : ''"
        vertical
        color="lightgray"
        ></v-divider>

        <v-btn @click="goTo('/login')"
            v-if="!loggedIn"
            target="_blank"
            text
        >  
        <span class="mr-2" style="color: orange; margin: 1%; font-weight: 600;">&nbsp;Gİrİş&nbsp;</span>
        </v-btn>
        
        <v-divider
        v-if="!loggedIn"
        vertical
        color="lightgray"
        ></v-divider>

        <v-btn @click="goTo('/register')"
            v-if="!loggedIn"
            target="_blank"
            text
        >        
        <span style="margin: 1%; color: rgb(52, 168, 202); font-weight: 600;">&nbsp;Kaydol&nbsp;&nbsp;</span>
        </v-btn>
        
        <span v-if="loggedIn" class="mr-2" style="color: orange; margin: 0.7%; font-weight: 600;">
            <span style="color: #004b55;"> Hoş geldin </span>
        &nbsp; {{ user.username }} ! &nbsp;</span>

        <v-divider
        vertical
        color="lightgray"
        v-if="!loggedIn"
        ></v-divider> 

        <v-btn
            href="https://github.com/furkan-atak/ekmek-cli"
            target="_blank"
            v-if="!loggedIn"
            text
        > 
            <span class="mr-2" style="color: orange">Hakkımızda</span>
            <v-icon style="color: orange;">mdi-open-in-new</v-icon>
        </v-btn>

        <v-menu
            bottom
            min-width="200px"
            rounded
            style="z-index: 60;"
            offset-y
            v-if="loggedIn"
        >
            <template v-slot:activator="{ on }">
            <v-btn
                style="margin: 1%; margin-right: 0.2%;"
                icon
                x-large
                v-on="on"
            >
                <v-avatar
                color="#23395d"
                size="50"
                
                >
                <img v-if="user.imageUrl" :src="user.imageUrl"> 
                <span v-if="!user.imageUrl" class="white--text text-h5">{{ nameSurname }}</span>
                </v-avatar>
            </v-btn>
            </template>
            <v-card>
            <v-list-item-content>
                <div>
                <div  class="mx-auto text-center">    
                <v-avatar
                    color="#23395d"
                    gradient
                    warn
                >
                    <img v-if="user.imageUrl" :src="user.imageUrl"> 
                    <span  v-if="!user.imageUrl" class="white--text text-h5">{{ nameSurname }}</span>
                </v-avatar>
                <h3>{{ user.username }}</h3>
                <p class="text-caption mt-1">
                    {{ user.email }}
                </p>
                </div>
                <v-divider class="my-3"></v-divider>
                <v-btn
                    width="100%"
                    @click="navigate('/user-profile')"
                    depressed
                    rounded
                    text
                    style="justify-content: right; justify-items: right;"
                >
                   <v-icon style="margin: 12%;">mdi-account-edit</v-icon> <span style="margin-right: 23%;"> Hesap &nbsp;&nbsp; </span>  
                </v-btn>
                <v-divider class="my-3"></v-divider>
                <v-btn
                    width="100%"
                    depressed
                    rounded
                    text
                    @click="logout"
                >
                  <v-icon style="margin-right: 13%;">mdi-exit-to-app</v-icon>  <span style="margin-right: 23%;"> Çıkış </span>  
                </v-btn>
                </div>
            </v-list-item-content>
            </v-card>
        </v-menu>
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

    loggedIn = false;
    user:any = null;
    nameSurname = '';
    

    mounted() {

        if(localStorage.getItem('token') != null) {
            this.loggedIn = true;
            this.user = this.getUser();
            this.nameSurname = this.user.username;
            this.nameSurname = this.nameSurname.charAt(0) + this.nameSurname.split(' ')[1].charAt(0);
        }else {
            window.addEventListener('loggedIn', (event:any) => {
                this.loggedIn = event.detail.storage;
                this.user = JSON.parse(event.detail.info);
                this.nameSurname = this.user.username;
                this.nameSurname = this.nameSurname.charAt(0) + this.nameSurname.split(' ')[1].charAt(0);
            });
        }
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


