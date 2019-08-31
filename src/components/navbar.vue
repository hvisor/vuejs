<template>
  <div>
    <h1>Navbar</h1>
    <router-link to="/">Home</router-link>
    {{'|'}}
    <router-link to="/about">About</router-link>
    {{'|'}}
    <router-link to="/contact">Contact</router-link>
    {{ ' | ' }}
    <router-link to="/user">User</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>