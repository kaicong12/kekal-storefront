<template>
  <div class="loading-container">
    <h2>this page is loading</h2>
  </div>
</template>

<script>
export default {
  name: "LoadingPage"
}
</script>

<style scoped>
.loading-container {
  z-index: 100;
  background-color: rgb(0, 0, 0, 0.2);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>