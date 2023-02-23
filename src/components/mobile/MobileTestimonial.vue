<template>
  <section class="testimonial-area">
    <img src="@/assets/storeGoogle.jpeg" alt="testimonial image">

    <div class="container">
      <h2>What they <span>Say About Us</span></h2>

      <div class="owl-stage">
        <div class="touch-tap-left" role="button" aria-label="Previous" tabindex="0" @click="prevSlide"
             @keyup.enter="prevSlide" @keyup.space="prevSlide"></div>
          <div class="touch-tap-right" role="button" aria-label="Next" tabindex="0" @click="nextSlide"
               @keyup.enter="nextSlide" @keyup.space="nextSlide"></div>

        <TestimonialComponent
            v-for="(customer, index) in customers"
            :key="customer.name"
            :customer="customer"
            :currentSlide="current"
            :index="index"
        />
      </div>

      <div class="owl-controls">
        <div class="owl-dots">
          <div class="owl-dot" @click= "this.current=0" ><span></span></div>
          <div class="owl-dot" @click= "this.current=1" ><span></span></div>
          <div class="owl-dot" @click= "this.current=2" ><span></span></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import TestimonialComponent from "@/components/mobile/TestimonialComponent";

export default {
  name: "MobileTestimonial",
  components: { TestimonialComponent },
  data() {
    return {
      current: 0,
      customers: [
        {
          "name": "Kishore",
          "avatar": require("@/assets/avatar/kishore.svg"),
          "review": "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,\n" +
              "                sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.\n" +
              "                Nemo enim ipsam voluptatem quia voluptas."
        },
        {
          "name": "Yamini",
          "avatar": require("@/assets/avatar/Yamini.svg"),
          "review": "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,\n" +
              "                sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.\n" +
              "                Nemo enim ipsam voluptatem quia voluptas."
        },
        {
          "name": "Yong",
          "avatar": require("@/assets/avatar/Yong.svg"),
          "review": "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,\n" +
              "                sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.\n" +
              "                Nemo enim ipsam voluptatem quia voluptas."
        },
      ]
    }
  },
  methods: {
    nextSlide() {
      this.current = this.current < this.customers.length - 1 ? this.current += 1 : this.current
    },
    prevSlide() {
      this.current = this.current > 0 ? this.current -= 1 : this.current
    }
  }
}
</script>

<style scoped>
.testimonial-area {
  color: black;
  padding: 20px 0;
  position: relative;
  overflow: hidden;
  margin: 30px 0;
}

.testimonial-area > img {
  opacity: 0.35;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: auto;
}

.container {
  overflow: hidden;
  height: 450px;
}

.container h2 {
  margin-bottom: 30px;
  position: relative;
  text-transform: capitalize;
  font-weight: 700;
  color: #2c3e50;
}

.container h2 span {
  color: #d01818;
  font-weight: 600;
}

.owl-stage {
  position: relative;
}

.touch-tap-left,
.touch-tap-right {
  position: absolute;
  top: 0;
  width: 20%;
  height: 100%;
}

.touch-tap-left {
  left: 0;
}

.touch-tap-right {
  right: 0;
}

.owl-dots {
  margin-top: 30px;
  text-align: center;
}

.owl-dot {
  cursor: pointer;
  user-select: none;
  width: 20px;
  height: 3px;
  background: red;
  display: inline-block;
  margin: 0 3px;
}
</style>