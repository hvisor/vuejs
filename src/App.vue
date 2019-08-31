<template>
  <div>
    <section class="section">
      <div class="container">
        <h1>Application</h1>
        <navbar />
        <router-view />
      </div>
    </section>

    <!-- <hello/><world/>
    <hello/><world/>-->
  </div>
</template>



<script>
import "bulma/css/bulma.min.css";
import Navbar from "./components/navbar";
import Hello from "./components/hello";
import World from "./components/world";
export default {
  components: {
    // 'hello':Hello,
    // 'world':World,
    navbar: Navbar
  }
};
</script>

