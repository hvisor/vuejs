<template>
  <div>
    <h1>Post</h1>
    <p>
      <button @click="getPost()" class="button">Get Post</button>
    </p>
    <hr />
    <p v-for="each in datas" :key="each.id">
      <router-link :to="'/user/' + each.id">Title: {{ each.title }}</router-link>
    </p>
  </div>
</template>

<script>
import axios from "axios";
const url = "https://jsonplaceholder.typicode.com/posts?_limit=10";
export default {
  data() {
    return {
      datas: []
    };
  },
  methods: {
    getPost() {
      //const data = axios.get(url)
      //console.log(data)

      axios.get(url).then(res => {
        this.datas = res.data;
        console.log(res.data);
      });
      console.log("OK");
    }
  }
};
</script>

<style>
</style>