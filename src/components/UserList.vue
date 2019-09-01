<template>
  <div class="box">
    <h1 class="title">User List Item</h1>

    <!-- <p v-for="each in users" :key="each.id">
      <router-link :to="'/user/' + each.id">User: {{ each.name }}</router-link>
    </p>-->
    <user-list-item v-for="each in users" :key="each.id" :u="each" />
  </div>
</template>

<script>
import UserListItem from "./UserListItem";

export default {
  components: {
    "user-list-item": UserListItem
  },
  props: ["users"]
};
</script>

<style>
</style>