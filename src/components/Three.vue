<template>
    <div class="box">
        <h1 class="title">Three</h1>
         <progress class="progress is-danger" :value="counter" min="1" max="20"></progress>
    </div>
</template>

<script>


export default {
  props: ["counter"],
  components: {

  }
};
</script>