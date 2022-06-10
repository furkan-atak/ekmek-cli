<template>
    <div  v-if="done" class="center examplex">
        <v-row>
            <div style="width: 100%; height: 200px; margin-top: 2.5%; background-color: rgb(24, 32, 43);">
                <v-row style="margin-top: 2%;">
                    <h1 style="margin-left: 10%; margin-top: 3%; color: #F5F7FA; 
                    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
                    font-weight: 500;">
                    {{ group ? group.name : 'Yüksek Kaliteli Freelancer Hizmeti ve Teklifleri Alın' }}  </h1>
                </v-row>
                <v-row>
                <span style="margin-left: 10.3%; color: #ABB2C4; font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;">
                    {{  group ? group.subHeader : 'Teklifler ve hizmetler mi arıyorsunuz? Ekmek sizinle.' }} </span>
                </v-row>
            </div>
      </v-row>
        <br><br>
        <br><br>
        <v-row>
          <v-col v-if="group" cols="3"> 
            <div style="position: sticky; top: 150px;">
                <p style="margin-left: 15%;  font-size: 20px; padding-bottom: 2%;"> {{ group.name }} </p>
                <template v-for="(cat, i) in group.categories">
                <v-row :key="i">
                    <v-hover v-slot="{ hover }">
                    <p :style=" hover ? 'text-decoration:underline; margin-left: 22%; margin-bottom: 3%;' : 'margin-left: 22%; margin-bottom: 3%;'"> {{ cat.name }} </p>
                    </v-hover>
                </v-row>
                </template>
            </div>
          </v-col>
            <v-col>
             <v-row :style="group ? '': 'margin-left: 2%;'"> 
                <template v-for="(category, i) in categories">
                    <v-col cols="3" :md="group ? '4' : '3'" :key="i">     
                          <vs-card  type="4">
                                <template #title>
                                <h3>{{ category.name }}</h3>
                                </template>
                                <template #img>
                                <img :src="category.image_Url" alt="">
                                </template>
                                <template #text>
                                <p>
                                    {{ category.Description }}
                                </p>
                                </template>
                                <template #interactions>
                                <vs-button danger icon>
                                    <i class='bx bx-heart'></i>
                                </vs-button>
                                <vs-button class="btn-chat" shadow primary>
                                    <i class='bx bx-chat' ></i>
                                    <span class="span">
                                    54
                                    </span>
                                </vs-button>
                                </template>
                            </vs-card>

                    </v-col>
                </template>  
            </v-row>
          </v-col>
        </v-row>
        <div style="margin: 3%;"></div>
    </div>
</template>

<script lang="ts">
import BaseView from '@/views/baseView';
import axios from 'axios';
import Component from 'vue-class-component';

@Component
export default class NavCategories extends BaseView{

    categories:any = [];
    groupIndex:any;
    group:any;
    done = false;
    isOver = false;

  created() {
      this.done = false;
     this.groupIndex =  this.$route.query['index'];
     if(this.groupIndex){
        this.showLoading(true);    
        axios.get(`http://localhost:1337/groups?index=${this.groupIndex}`).then(r => {
            this.group = r.data[0];
        }).then(() => {
            axios
                .get(`http://localhost:1337/categories?group=${this.group.id}`).then(response => {
                this.categories = response.data;
            }).then(() => { this.done = true; this.showLoading(false); }).catch(error => {
                alert(error);
            });
        }).catch(err => {
            alert(err);
        }); 
     }else {
         this.showLoading(true);
         axios
            .get(`http://localhost:1337/categories`).then(response => {
            this.categories = response.data;
        }).then(() => { this.done = true; this.showLoading(false); }).catch(error => {
            alert(error);
        });
     }
         
  }


}
  
</script>

<style>

.vs-card__img img {
    width: auto;
    height: 300px;
}

</style>