<template>
  <div>
    <h1 class="title">User</h1>
    <p>
      <button @click="getUsers()" class="button">Get Users</button>
    </p>
    <div class="field">
      <input v-model="filter" type="text" class="input" />
      <pre>{{ filter }}</pre>
    </div>
    <hr />
    <user-list :users="filterUsers" />
    <!-- <user-list :users="$store.getters.getUser" /> -->
  </div>
</template>

<script>
import axios from "axios";
import UserList from "../components/UserList";

const url = "https://jsonplaceholder.typicode.com/users";

export default {
  components: {
    "user-list": UserList
  },
  filter: {},
  computed: {
    filterUsers() {
      const pattern = new RegExp(this.filter, "i");

      return this.$store.getters.getUser.filter(each => {
        return pattern.test(each.name) || pattern.test(each.username);
      });
    }
  },

  data() {
    return {
      users: [],
      filter: ""
    };
  },

  methods: {
    getUsers() {
      this.$store.dispatch("actionUsers");
    }
    //async getUsers() {
    // const res = await axios.get(url)
    // console.log(res.data)
    // this.$store.commit('mutateUser', res.data)
    // this.users = this.$store.getUser

    //}
  }
};
</script>