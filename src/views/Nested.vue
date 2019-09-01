<template>
  <div class="box">
    <h1 class="title">Nested</h1>
    <progress class="progress" :value="counter" min="1" max="20"></progress>
    <p>
      <button @click="counter+=1" class="button">Update</button>
      <button @click="resetCounter" class="button">Reset</button>
    </p>
    <hr />
    <!-- <p>Counter: {{ counter }}</p> -->
    <one @reset="resetCounter" :counter="counter" />
  </div>
</template>

<script>
import One from "../components/One";

export default {
  components: {
    one: One
  },
  data() {
    return {
      counter: 1
    };
  },

  methods: {
    resetCounter() {
      this.counter = 1;
    }
  }
};
</script>