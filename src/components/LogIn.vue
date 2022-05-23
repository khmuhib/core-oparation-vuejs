<template>
  <div class="login_main">
      <h2>Sign Up</h2>
      <hr>

      <div class="login_form">
          <input type="text" placeholder="Name" v-model="name">
          <input type="text" placeholder="Password" v-model="pass">
          <button @click="logIn">Log In</button>

          <p><router-link to="/signup">Create an Account</router-link></p>

          <p>{{name}}</p>
          <p>{{email}}</p>
          <p>{{pass}}</p>
      </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'LogIn',
    data () {
        return {
            name: '',
            pass: ''
        }
    },
    methods: {
        async logIn() {
            let result = await axios.get(`http://localhost:3000/user?name=${this.name}&pass=${this.pass}`)
            if(result.status == 200 && result.data.length>0) {
                //alert('Sign Up Successfull')
                localStorage.setItem("user-info", JSON.stringify(result.data[0]));
                this.$router.push('/');
            }
        }

    },
    mounted () {
        let user = localStorage.getItem("user-info")

        if(user) {
            this.$router.push('/');
        }
    }



}
</script>

<style>
.login_main h2 {
    text-align: center;
    font-size: 30px;
}

.login_main hr {
    width: 10%;
    height: 10px;
    background-color: black;
}

.login_form  {
    width: 50%;
    margin: auto;
    text-align: center;
    padding: 20px 20px;
    box-shadow: 0px 0px 10px 0px #ccc;
    margin-top: 30px;
}

.login_form input{
    display: block;
    margin: auto;
    width: 100%;
    box-sizing: border-box;
    padding: 10px 20px;
    margin: 10px 0px;

}

.login_form button {
    padding: 10px 20px;
    background-color: aqua;
    font-weight: bold;
}
</style>