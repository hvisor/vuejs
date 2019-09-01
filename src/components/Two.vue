<template>
  <div class="box">
    <h1 class="title">Two</h1>
      <!-- <progress class="progress is-primary" :value="counter" min="1" max="20"></progress> -->
    <three :counter="counter"/>
  </div>
</template>

<script>
import Three from "../components/Three";

export default {
  props: ["counter"],
  components: {
    three: Three
  }
};
</script>