<template>
  <MobileHeader />

  <!-- Trail List -->
  <div class="breadcrumb-trail">
    <ul class="trail-items">
      <li class="trail-begin"><a href="/">Home</a></li>
      <li class="trail-arrow"><font-awesome-icon icon="fa-solid fa-angles-right" /></li>
      <li class="trail-begin"><a href="/products">Products</a></li>
      <li class="trail-arrow"><font-awesome-icon icon="fa-solid fa-angles-right" /></li>
      <li v-if="product" class="trail-active">{{product.brand}} {{ product.model }}</li>
    </ul>
  </div>
  <!-- Trail list ends -->

  <!--  product image-->
  <div class="display-container" v-if="product">
      <img :src="product.imageUrl" alt="product image">
      <h3>{{ product.brand }} {{product.model}}</h3>
      <div class="enquire-button">
        <button>Enquire Now</button>
      </div>
      <h5>Don't miss out the best offers for this month</h5>
  </div>
  <!--  product image ends-->

  <!--  product specs-->
  <div class="card">
    <div class="spec-panel" :class="active ? 'darkMode' : 'lightMode'" @click="active=!active">
      <span>Standard</span>
      <span>Moped, Petrol, Manual</span>
      <span v-if="product">RM {{ product.price }}</span>
      <span v-if="active" class="chevron-icon"><font-awesome-icon icon="fa-solid fa-chevron-down"/></span>
      <span v-if="!active" class="chevron-icon"><font-awesome-icon icon="fa-solid fa-chevron-up"/></span>
    </div>

    <div class="tab-feature" :class="active ? 'active' : ''">
      <ul class="rate-features">
        <li @click="tabSelected=1" :class="tabSelected===1 ? 'selectedTab' : 'unselected'">Engine & Performance</li>
        <li @click="tabSelected=2" :class="tabSelected===2 ? 'selectedTab' : 'unselected'">Dimension</li>
        <li @click="tabSelected=3" :class="tabSelected===3 ? 'selectedTab' : 'unselected'">Fuel & Ignition</li>
        <li @click="tabSelected=4" :class="tabSelected===4 ? 'selectedTab' : 'unselected'">Gear & Transmission</li>
      </ul>
    </div>
  </div>

  <transition name="slide" v-show="showPopup">
    <div class="enquire-popup">
      <button>Enquire Now</button>
    </div>
  </transition>

</template>

<script>
import {ref, onBeforeMount, onMounted, onUnmounted} from 'vue';
import { useRoute } from 'vue-router';
import {fetchProductData} from "@/scripts/db";
import MobileHeader from "@/components/mobile/MobileHeader";


export default {
  name: "ProductPage",
  props: ['id'],
  components: {
    MobileHeader,
  },
  setup(props) {
    const product = ref(null);
    const route = useRoute();
    const active = ref(false);
    const tabSelected = ref(1);
    const showPopup = ref(false);

    const handleScroll = () => {
      const scrollPosition = window.scrollY || document.documentElement.scrollTop;
      const threshold = 300; // Replace this value with the desired scroll length

      if (scrollPosition > threshold) {
        showPopup.value = true;
      } else {
        showPopup.value = false;
      }
    };

    onBeforeMount(async () => {
      const productId = props.id || route.params.id;
      product.value = await fetchProductData(productId);
    });

    onMounted(() => {
      window.addEventListener('scroll', handleScroll);
    });

    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll);
    });

    return {
      product,
      active,
      tabSelected,
      showPopup
    };
  },
}
</script>

<style scoped>

.display-container {
  padding: 0 16px;
}

.display-container h5 {
  font-weight: 400;
  font-size: 12px;
  color: rgba(36,39,44,0.5);
}

.display-container img {
  width: 100%;
  max-width: 400px;
}

.enquire-button button {
  background: #f34653;
  width: 90%;
  color: #fff;
  text-align: center;
  font-size: 15px;
  display: inline-block;
  border: 1px solid transparent;
}

.trail-items {
  padding-left: 30px;
  text-align: left;
}

.trail-items > li > a {
  color: #888888;
  text-decoration: none;
  font-weight: 500;
}

.trail-items > li {
  display: inline-block;
}

.trail-arrow {
  padding: 0 8px;
  font-weight: 400;
  color: #ccc;
  font-size: 14px;
}

.trail-active {
  color: #222;
  font-weight: 500;
}

.card {
  background-color: #fff;
  border-radius: 6px;
  box-shadow: 0 1px 4px 0 rgba(40,51,63,0.16);
  margin: 20px;
}

.spec-panel {
  border-radius: 6px 6px 0 0;
  padding: 16px;
  line-height: 24px;
  position: relative;
}

.spec-panel > span {
  display: block;
  font-size: 14px;
  font-weight: 500;
  text-align: left;
  padding-left: 5px;
}

.chevron-icon {
  position: absolute;
  right: 16px;
  top: 40%;
}

.lightMode {
  background: rgba(36,39,44,0.1);
  color: #24272c;
}

.darkMode {
  background: #28333f;
  color: #ffff;
}

.tab-feature {
  color: #484848;
  height: 0;
  transition: height 1s ease-out;
  -ms-transform: scaleY(0);
  transform: scaleY(0);
  display: block;
}

.active.tab-feature {
  display:block;
  transform: scaleY(1);
  transform-origin: top;
  transition: transform 0.4s ease;
  box-sizing: border-box;
  height: auto;
  padding-top: 20px;
}

.tab-feature > ul {
  scroll-behavior: smooth;
  white-space: nowrap;
  overflow: auto;
  margin-top: 0;
  padding-inline-start: 5px;
}

.selectedTab {
  background: rgba(219,21,31,0.07);
  color: #db151f;
}

.unselected {
  background: #f4f6f9;
  color: #24272c;
}

.tab-feature > ul > li {
  display: inline-block;
  min-width: 79px;
  height: 33px;
  line-height: 33px;
  font-size: 13px;
  text-transform: capitalize;
  vertical-align: middle;
  padding: 0 16px;
  margin: 0 5px;
  white-space: nowrap;
  text-align: center;
  cursor: pointer;
  border-radius: 6px;
}

::-webkit-scrollbar {
    width: 0;
    height: 0;
}

.enquire-popup {
  position: sticky;
  background: #fff;
  width: 100%;
  padding: 8px 20px;
  left: 0;
  height: 64px;
  right: 0;
  bottom: 0;
  z-index: 11;
  transition: all 0.2s;
}

.slide-enter-active,
.slide-leave-active {
  transition: opacity 0.3s ease;
}

.slide-enter-from {
  transform: translateY(100%);
}

.slide-leave-to {
  transform: translateY(100%);
}

</style>