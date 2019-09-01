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
    {{ ' | ' }}
    <router-link to="/form">Form</router-link>
    {{ ' | ' }}
    <router-link to="/chart">Chart</router-link>
    {{ ' | ' }}
    <router-link to="/i18n">I18n</router-link>
    {{ ' | ' }}
    <router-link to="/nested">Nested</router-link>
    {{ ' | ' }}
    <router-link to="/post">Post</router-link>
     {{ ' | ' }}
    <router-link to="/search">Search</router-link>
     {{ ' | ' }}
    <router-link to="/pagination">Page</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>