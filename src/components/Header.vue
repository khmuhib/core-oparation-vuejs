<template>
  <div class="nav">

      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/add">Add</router-link>
      <router-link to="/update">Update</router-link>
      <router-link to="/contact">Contact</router-link>
      <a href="#" @click="logOut">Log Out</a>
  </div>
</template>

<script>
export default {
    name: 'Header',
    methods: {
        logOut () {
            console.warn("Log Out")
            localStorage.clear();
            this.$router.push('/login');
        }
    }

}
</script>

<style>

.nav {
    background-color: gray;
    overflow: hidden;
}

.nav a {
    float: left;
    padding: 20px 30px;
    text-decoration: none;
    color: white;
    font-size: 20px;
    font-weight: bold;
    
}

.nav a:hover {
    background-color: bisque;
    color: black;
}

</style>