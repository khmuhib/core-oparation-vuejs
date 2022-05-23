<template>
  <div class="add_main">
    <Header></Header>
    <h2>Add Data</h2>
    <hr />

    <div class="add_form">
      <input type="text" placeholder="name" v-model="res.name" />
      <input type="text" placeholder="contact" v-model="res.contact" />
      <input type="text" placeholder="address" v-model="res.address" />
      <button @click="add">Add</button>

      <p>{{ res.name }}</p>
      <p>{{ res.contact }}</p>
      <p>{{ res.address }}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Header from "./Header.vue";
export default {
  name: "Add",
  components: { Header },
  data() {
    return {
      res: {
        name: "",
        contact: "",
        address: "",
      },
    };
  },

  mounted() {
    let user = localStorage.getItem("user-info");

    if (!user) {
      this.$router.push("/SignUp");
    }
  },

  methods: {
    async add() {
      console.warn(this.res);
      let result = await axios.post("http://localhost:3000/res", {
        name: this.res.name,
        contact: this.res.contact,
        address: this.res.address,
      });

      if (result.status == 201) {
        //alert('Data Add Successfull')
        this.$router.push('/');
      }
    },
  },
};
</script>

<style>
.add_main h2 {
  text-align: center;
  font-size: 30px;
}

.add_main hr {
  width: 10%;
  height: 10px;
  background-color: black;
}

.add_form {
  width: 50%;
  margin: auto;
  text-align: center;
  padding: 20px 20px;
  box-shadow: 0px 0px 10px 0px #ccc;
  margin-top: 30px;
}

.add_form input {
  display: block;
  margin: auto;
  width: 100%;
  box-sizing: border-box;
  padding: 10px 20px;
  margin: 10px 0px;
}

.add_form button {
  padding: 10px 20px;
  background-color: aqua;
  font-weight: bold;
}
</style>
