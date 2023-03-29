<template>
    <div class="home-slider" @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd">
      <!--  first slide -->
        <div class="slider-owl" v-show="currentSlide===0" :style="{backgroundImage: `url(${slides[0]})`}">
            <div class="slider-information">
              <h3 class="slogan-h3">Your one stop authorized motorcycle dealer</h3>
              <h5 class="slogan-h5">Providing all of your needs about motorcycle in Johor Bahru. Your satisfaction is our priority.</h5>
              <button class="whatsapp-button">
                  <a href="https://wa.me/60127126128">
                    <font-awesome-icon icon="fa-brands fa-whatsapp" /> Contact Us
                  </a>
              </button>
            </div>
        </div>
      <!-- first slide ends-->


        <!-- second slide-->
        <div
            class="slider-owl"
            v-show="currentSlide===1"
            :style="{backgroundImage: `url(${slides[1]})`}"
        >
        </div>
        <!-- second slide ends-->

    </div>
</template>

<script>
import {ref, onMounted, onUnmounted} from "vue";
import {retrieveImageUrl} from "@/scripts/storage";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";


export default {
  name: "MobileHeroBanner",
  components: {FontAwesomeIcon},
  setup() {
    const slides = ref([])
    const slideLength = 2
    const currentSlide = ref(0);
    let timer;

    const startTimer = () => {
      timer = setInterval(() => {
        currentSlide.value = (currentSlide.value + 1) % slideLength;
      }, 4000);
    };

    const goToSlide = (index) => {
      currentSlide.value = index;
    };

    let touchStartX = ref(0);

    const touchStart = (event) => {
      touchStartX.value = event.touches[0].clientX;
    };

    const touchMove = () => {
      clearInterval(timer);
    };

    const touchEnd = (event) => {
      const touchEndX = event.changedTouches[0].clientX;
      const deltaX = touchEndX - touchStartX.value;

      if (deltaX > 50) {
        currentSlide.value = (currentSlide.value - 1 + slideLength) % slideLength;
      } else if (deltaX < -50) {
        currentSlide.value = (currentSlide.value + 1) % slideLength;
      }

      startTimer();
    };

    onMounted(async () => {
        const slidesPath = [
          'banner/repairWorker.jpg',
          'banner/banner2.jpg'
      ]

      // download images from firebase
      slides.value = await Promise.all(slidesPath.map(async (path) => {
        return await retrieveImageUrl(path)
      }))

      startTimer();
    });

    onUnmounted(() => {
      clearInterval(timer);
    });

    return {
      slides,
      currentSlide,
      goToSlide,
      touchStart,
      touchMove,
      touchEnd,
    };
  },
}
</script>

<style scoped>

.home-slider {
  display: block;
  padding: 0 20px;
}

.slider-owl {
  height: 300px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
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
  border-radius: 6px;
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