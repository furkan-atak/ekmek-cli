<template>
    <div>
      <vs-navbar style="z-index: 50; background-color: #ABB2C4; margin-top: 2cm;" fixed center-collapsed v-model="active">
      <template v-for="(group,i) in groups">
        <vs-navbar-group :key="i">
          <p @click="goTo(`categories?index=${group.index}`, group.categories[0])" style="height: 10px; margin-top: 2px; color: #18202B;"> {{ group.name }}</p>
          <template #items>
            <template v-for="(cat,j) in groups[i].categories">
              <vs-navbar-item :key="j" @click="goTo(`/offer/list?id=${cat.id}`)" :active="active == `${cat.name}`" :id="cat.name">
                {{ cat.name }}
              </vs-navbar-item>
            </template>
          </template>
        </vs-navbar-group>
        </template>
      </vs-navbar>
    </div>
</template>

<script lang="ts">
    import axios from 'axios';
    import { Component } from 'vue-property-decorator';
    import BaseView from '../../views/baseView';
    @Component
    export default class NavBar extends BaseView{
    constructor() {
        super();
    }

    active = "";
    data = 12;
    loading = false;
    selection = ""; 
    reserve = "";
    groups:any = [];
    done = false;

    created() {
      this.showLoading(true);
     axios
          .get('http://localhost:1337/groups').then(response => {
            this.groups = response.data;
        }).then(() => { this.done = true; this.showLoading(false); }).catch(error => {
            alert(error);
        }).finally(() => { this.showLoading(false); });    
    }
  
    /* eslint-disable */
    goTo(path: string, activeId?:any ,query?: any) {
      this.active = activeId ? activeId.name : '';
      console.log(this.active);
        this.navigate(path, query);
    }
}
</script>