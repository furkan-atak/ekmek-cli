import { Component, Vue } from 'vue-property-decorator';
import axios from 'axios';
import 'boxicons'
@Component
export default class SignUp extends Vue{
 
  
  active = "";
  activee = 0;
  loading = false;
  selection = ""; 
  reserve = "";
  userName = "";
  userSurname = "";
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

  login() {
    // Request API.
    axios
      .post('http://localhost:1337/auth/local/register', {
        username: this.userName,
        email: this.mail,
        password: this.userPassword,
      })
      .then(response => {
        // Handle success.
        this.activee = 1;
        alert('Login Success !!! \n' + 'User Profile: ' + response.data.user + '\n User Token: ' + response.data.jwt);
        
        // User
        //   name: test4
        //   pw  : test123
        //   mail: asd@gmail.com 

        // console.log('Well done!');
        // console.log('User profile', response.data.user);
        // console.log('User token', response.data.jwt);
      })
      .catch(error => {
        // Handle error.
        alert('Login Failed :/ \n' + error.response);
        //console.log('An error occurred:', error.response);
      });
  }
 
}