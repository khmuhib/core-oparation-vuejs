<template>
  <Header></Header>
  <h2>Hi, {{ name }} This is Home Page</h2>

  <table border="1" width="500px">
    <tr>
      <td>Id</td>
      <td>Name</td>
      <td>Phone</td>
      <td>Address</td>
      <td colspan="2">Action</td>
    </tr>
    <tr v-for="item in resta" :key="item.id">
      <td>{{ item.id }}</td>
      <td>{{ item.name }}</td>
      <td>{{ item.contact }}</td>
      <td>{{ item.address }}</td>
      <td><router-link :to="'/update/'+item.id">Update</router-link></td>
      <td><button @click="del(item.id)">Delete</button></td>
    </tr>
  </table>
</template>

<script>
import axios from "axios";
import Header from "./Header.vue";
export default {
  name: "Home",
  data() {
    return {
      name: "",
      resta: [],
    };
  },
  components: {
    Header,
  },

  async mounted() {
    let user = localStorage.getItem("user-info");
    this.name = JSON.parse(user).name;

    if (!user) {
      this.$router.push("/SignUp");
    }

    let res = await axios.get("http://localhost:3000/res");
    this.resta = res.data;
  },

  methods: {
    async del(id) {
      console.log(id)
      let result = await axios.delete("http://localhost:3000/res/"+id);
      console.warn(result);
      if (result.status == 200) {
        this.loadData();
      }
    },
    async loadData() {
    let user = localStorage.getItem("user-info");
    this.name = JSON.parse(user).name;

    if (!user) {
      this.$router.push("/SignUp");
    }

    let res = await axios.get("http://localhost:3000/res");
    this.resta = res.data;
    },
  },
};
</script>

<style>
h2 {
  text-align: center;
  margin: 50px 0px;
}

table {
  margin: auto;
}
</style>
