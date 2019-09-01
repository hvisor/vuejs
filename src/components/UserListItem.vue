<template>
  <div>
    <h1 class="title">User List Item</h1>
    <router-link :to="'/user/' + u.id">{{u.name}}</router-link>
  </div>
</template>

<script>
export default {
  props: ["u"]
};
</script>

<style>
</style>