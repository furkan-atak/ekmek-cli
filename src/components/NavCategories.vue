<template>
    <div class="center examplex">
        <br><br>
        <br><br>
        <v-row>
          <v-col cols="3"></v-col>
            <v-col>
             <v-row> 
                <template v-for="(category, i) in categories">
                    <v-col cols="12" md="4" :key="i">     
                          <vs-card type="4">
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
    </div>
</template>

<script lang="ts">
import BaseView from '@/views/baseView';
import axios from 'axios';
import Component from 'vue-class-component';

@Component
export default class NavCategories extends BaseView{

    categories:any = [];

    active = "";
    data = 12;
    loading = false;
    selection = ""; 
    reserve = "";
  created() {
     this.showLoading(true);

        axios
            .get('http://localhost:1337/categories').then(response => {
            this.categories = response.data;
            console.log(this.categories);
        }).catch(error => {
            alert(error);
        }).finally(() => this.showLoading(false));
       
  }
  mounted() { 
    //sth
  }
  logAt(sth:string) {
      console.log(sth);
  }

}
  
</script>

<style>

.vs-card__img img {
    width: auto;
    height: 300px;
}

</style>