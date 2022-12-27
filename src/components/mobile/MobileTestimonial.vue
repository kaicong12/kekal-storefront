<template>
  <section class="testimonial-area">
    <img src="@/assets/storeGoogle.jpeg" alt="testimonial image">

    <div class="container">
      <h2>What they <span>Say About Us</span></h2>

      <div class="owl-stage">
        <div class="owl-item">
          <div class="single-testimonial-box">
            <img src="@/assets/avatar/kishore.svg" alt="kishore avatar">
            <h4>Kishore</h4>
            <p>Customer</p>
            <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
              sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
              Nemo enim ipsam voluptatem quia voluptas.</p>
          </div>
        </div>

<!--        <div class="owl-item">-->
<!--          <div class="single-testimonial-box">-->
<!--            <img src="@/assets/avatar/Yamini.svg" alt="Yamini avatar">-->
<!--            <h4>Yamini</h4>-->
<!--            <p>Customer</p>-->
<!--            <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,-->
<!--              sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.-->
<!--              Nemo enim ipsam voluptatem quia voluptas.</p>-->
<!--          </div>-->
<!--        </div>-->

<!--        <div class="owl-item">-->
<!--          <div class="single-testimonial-box">-->
<!--            <img src="@/assets/avatar/Yong.svg" alt="Yong avatar">-->
<!--            <h4>Yong</h4>-->
<!--            <p>Customer</p>-->
<!--            <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,-->
<!--              sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.-->
<!--              Nemo enim ipsam voluptatem quia voluptas.</p>-->
<!--          </div>-->
<!--        </div>-->

      </div>


      <div class="owl-controls">
        <div class="owl-dots">
          <div class="owl-dot"><span></span></div>
          <div class="owl-dot"><span></span></div>
          <div class="owl-dot"><span></span></div>
          <div class="owl-dot"><span></span></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "MobileTestimonial"
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
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
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

.owl-item {
  width: 360px;
  margin-right: 0px;
}

.single-testimonial-box {
  border: 2px solid black;
  margin-bottom: 1px;
  padding: 30px 20px;
  text-align: center;
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