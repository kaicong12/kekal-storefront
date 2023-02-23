<template>
    <div class="home-slider">
        <div class="slider-owl">
            <div class="slider-information">
              <h3 class="slogan-h3">Your one stop authorized motorcycle dealer</h3>
              <h5 class="slogan-h5">Providing all of your needs about motorcycle. Your satisfaction is our priority.</h5>
              <button class="whatsapp-button">
                  <a href="https://wa.me/60127126128">
                    <font-awesome-icon icon="fa-brands fa-whatsapp" /> Contact Us
                  </a>
              </button>
            </div>
        </div>
    </div>
</template>

<script>
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
export default {
  name: "MobileHeroBanner",
  components: {FontAwesomeIcon}
}
</script>

<style scoped>

.home-slider {
  display: block;
  padding: 0 20px;
  margin: 120px 0 20px;
}

.slider-owl {
  background-image: url("@/assets/repairWorker.jpg");
  height: 300px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  border-radius: 10px;
  display: flex;
  align-items: center;
}

.slider-information {
  padding: 30px 15px;
}

.slider-information > * {
  color: white
}

.slider-information > h3 {
  font-size: 24px;
  font-weight: 600;
}

.slider-information > button {
  padding: 7px 20px;
  background: #bf1b1b;
  border: 1px solid #bf1b1b;
  min-width: 110px;
  border-radius: 4px;
  margin: 0 auto;
}

.slider-information > font-awesome-icon {
  margin-right: 10px;
}

.slider-information a {
  color: white;
  text-decoration: none;
}

</style>