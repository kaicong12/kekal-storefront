!<template>
  <div class="container">
    <img :src="display" :alt="imageAlt">
    <h3 class="title"> {{ title }} </h3>
    <p class="text"> {{ text }} </p>
  </div>
</template>

<script>
export default {
    name: "ServiceAvailable",
    props: {
        display: String,
        imageAlt: String,
        title: String,
        text: String,
    },
}
</script>

<style scoped>
  .container {
    flex: 1;
  }
</style>