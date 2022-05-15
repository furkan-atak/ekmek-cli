import { Component } from 'vue-property-decorator';
import 'boxicons'
import BaseView from '../baseView';

@Component
export default class Intro extends BaseView{
  
    icon = 'mdi-play';
 
    goTo(path:string) {
        this.navigate(path);
    }
}