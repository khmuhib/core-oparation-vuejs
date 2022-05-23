<template>
  <div class="add_main">
    <Header></Header>
    <h2>Add Data</h2>
    <hr />

    <div class="add_form">
      <input type="text" placeholder="name" v-model="resta.name" />
      <input type="text" placeholder="contact" v-model="resta.contact" />
      <input type="text" placeholder="address" v-model="resta.address" />
      <button @click="update">Update</button>

      <p>{{ resta.name }}</p>
      <p>{{ resta.contact }}</p>
      <p>{{ resta.address }}</p>
    </div>
  </div>
</template>

<script>
import Header from "./Header.vue";
import axios from "axios";
export default {
  name: "Update",
  components: { Header },
  data() {
    return {
      resta: {
        name: "",
        contact: "",
        address: "",
      },
    };
  },

  async mounted() {
    let user = localStorage.getItem("user-info");

    if (!user) {
      this.$router.push("/SignUp");
    }
    const res = await axios.get("http://localhost:3000/res/"+this.$route.params.id);
    this.resta = res.data;
  },

  methods: {
    async update () {
      let result = await axios.put("http://localhost:3000/res/"+this.$route.params.id, {
        name: this.resta.name,
        contact: this.resta.contact,
        address: this.resta.address,
      });

      if (result.status == 200) {
        //alert('Data Add Successfull')
        this.$router.push('/');
      }

    }
  },
};
</script>

<style></style>
