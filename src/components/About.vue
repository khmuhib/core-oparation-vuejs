<template>
  <Header></Header>
  <h2>About Page</h2>
</template>

<script>
import Header from './Header.vue';
export default {
    name: "About",
    components: { Header },

  mounted() {
    let user = localStorage.getItem("user-info");

    if (!user) {
      this.$router.push("/SignUp");
    }
  },
}
</script>

<style>

</style>