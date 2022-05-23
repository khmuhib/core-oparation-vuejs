<template>
  <div class="signup_main">
      <h2>Sign Up</h2>
      <hr>

      <div class="signup_form">
          <input type="text" placeholder="Name" v-model="name">
          <input type="text" placeholder="Email" v-model='email'>
          <input type="text" placeholder="Password" v-model="pass">
          <button @click="signUp">Sign Up</button>

          <p><router-link to="/login">Already I have an Account</router-link></p>

          <p>{{name}}</p>
          <p>{{email}}</p>
          <p>{{pass}}</p>
      </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'SignUp',
    data() {
        return {
            name: '',
            email: '',
            pass: '',
        }
    },
    methods: {
        async signUp () {
            let result = await axios.post("http://localhost:3000/user", {
                name: this.name,
                email:this.email,
                pass:this.pass
            })

            if (result.status == 201) {
                //alert('Sign Up Successfull')
                localStorage.setItem("user-info", JSON.stringify(result.data));
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



.signup_main h2 {
    text-align: center;
    font-size: 30px;
}

.signup_main hr {
    width: 10%;
    height: 10px;
    background-color: black;
}

.signup_form  {
    width: 50%;
    margin: auto;
    text-align: center;
    padding: 20px 20px;
    box-shadow: 0px 0px 10px 0px #ccc;
    margin-top: 30px;
}

.signup_form input{
    display: block;
    margin: auto;
    width: 100%;
    box-sizing: border-box;
    padding: 10px 20px;
    margin: 10px 0px;

}

.signup_form button {
    padding: 10px 20px;
    background-color: aqua;
    font-weight: bold;
}

</style>