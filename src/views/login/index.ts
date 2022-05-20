import { Component } from 'vue-property-decorator';
import axios from 'axios';
import 'boxicons'
import BaseView from '../baseView';

@Component
export default class Login extends BaseView{
  
  active = "";
  activee = 0;
  loading = false;
  selection = ""; 
  reserve = "";
  userName = "";
  userPassword = "";
  mail = "";
  hasVisiblePassword = false;
  getProgress = 0;
  created() {
    // st
  }
  mounted() { 
    //sth
  }

  beforeDestroy() {
    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
  }

  login() {
    // Request API.
    this.showLoading(true);
    delete axios.defaults.headers.common["Authorization"];
    axios
      .post('http://localhost:1337/auth/local', {
        identifier: this.mail,
        password: this.userPassword,
        headers: { Authorization:"" }
      })
      .then(response => {
        // Handle success.
        this.activee = 1;
        alert('Login Success !!! \n' + 'User Profile: ' + response.data.user + '\n User Token: ' + response.data.jwt);
        localStorage.setItem('token', response.data.jwt);
        localStorage.setItem('user', JSON.stringify(response.data.user));
        window.dispatchEvent(new CustomEvent('loggedIn', {
          detail: {
            storage: localStorage.getItem('token'),
            info: localStorage.getItem('user')
          }
        }));
        
        // User
        //   name: test4
        //   pw  : test123
        //   mail: asd@gmail.com 

        // console.log('Well done!');
        // console.log('User profile', response.data.user);
        // console.log('User token', response.data.jwt);

      }).then(() => {this.showLoading(false);}).then(() =>  { this.navigate('/'); })
      .catch(error => {
        // Handle error.
        this.showLoading(false)
        alert('Login Failed :/ \n' + error.response);
      });
  }
 
}