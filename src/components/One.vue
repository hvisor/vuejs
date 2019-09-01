<template>
  <div class="box">
    <h1 class="title">One</h1>
    <progress class="progress is-primary" :value="counter" min="1" max="20"></progress>
    <p>
      <button @click="$emit('reset')" class="button is-danger">Reset</button>
    </p>
    <two :counter="counter" />
  </div>
</template>

<script>
import Two from "../components/Two";

export default {
  props: ["counter"],
  components: {
    two: Two
  },
  data() {
    return {
      //counter: 1
    };
  }
};
</script>