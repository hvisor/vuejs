<template>
  <div>
    <h1 class="title">User Profile {{ $route.params.id }}</h1>
    <p>Name : {{user.name}}</p>
    <p>Username : {{user.username}}</p>
  </div>
</template>

<script>
import axios from "axios";
const url = "https://jsonplaceholder.typicode.com/users/";

export default {
  // แบบใหม่
  async mounted() {
    const res = await axios.get(url + this.$route.params.id);
    this.user = res.data
  },
  // แบบเก่า
  //  mounted() {
  //   axios.get(url + this.$route.params.id).then(res => {
  //     this.user = res.data
  //     console.log(res.data);
  //   });
  // },
  data() {
    return {
      user: {}
    };
  }
};
</script>

<style>
</style>