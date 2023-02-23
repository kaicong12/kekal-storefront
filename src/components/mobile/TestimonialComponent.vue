<template>
  <transition name="slide-in">
    <div class="single-testimonial-box" v-show="currentSlide === index">
      <img :src="customer.avatar" alt="avatar">
      <h4>{{ customer.name }}</h4>
      <p>Customer</p>
      <p> {{ customer.review }}</p>
    </div>
  </transition>
</template>

<script>
export default {
  name: "TestimonialComponent",
  props: ["customer", "currentSlide", "index"]
}
</script>

<style scoped>

.slide-in-enter-active,
.slide-in-leave-active {
  transition: all 1s ease-in-out;
}

.slide-in-enter-from {
  transform: translateX(-100%);
}

.slide-in-leave-to {
  transform: translateX(100%);
}

.single-testimonial-box {
  /*border: 2px solid black;*/
  margin: 1px 15px;
  padding: 30px 20px;
}

.single-testimonial-box img {
  width: auto;
  transform-style: preserve-3d;
  display: block;
  max-width: 100%;
  height: auto;
  border-radius: 100%;
  vertical-align: middle;
  border-style: none;
  margin: auto;
}

.single-testimonial-box h4 {
  font-size: 18px;
  margin-bottom: 0;
}

</style>