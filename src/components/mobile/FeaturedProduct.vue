<template>
  <div class="container">
    <h2 class="featured-title">Featured Product</h2>
    <Carousel :item-to-show="1" :autoplay="4000" :wrap-around="true">

      <Slide v-for="product in featuredProducts" :key="product">
        <MobileProductCard
            class="carousel__item"
            :product="product"
            @click="goToProductDetails(product.id)"
         />
      </Slide>

      <template #addons>
        <navigation />
      </template>
    </Carousel>
  </div>
</template>

<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Navigation, Slide } from 'vue3-carousel'
import MobileProductCard from "@/components/mobile/MobileProductCard";

import {ref} from "vue";
import {collection, getDocs, query, where} from "firebase/firestore";
import {db} from "@/scripts/firebase";
import {fetchProducts} from "@/scripts/db";
import {useRouter} from "vue-router/dist/vue-router";


const motorRef = collection(db, "motorcycles");
export default {
  name: "FeaturedProduct",
  components: {
    Carousel,
    Slide,
    Navigation,
    MobileProductCard
  },
  setup() {
    const featuredProducts = ref([]);

    const router = useRouter();
    function goToProductDetails(productId) {
      router.push({ name: 'ProductPage', params: { id: productId } });
    }

    async function loadFeaturedProducts() {
      const querySnapshot = await getDocs(query(motorRef, where("featured", "==", true)));
      if (!querySnapshot.empty) {
        featuredProducts.value = await fetchProducts(querySnapshot);
      }
    }

    loadFeaturedProducts()

    return {
      featuredProducts,
      goToProductDetails
    }
  }
}
</script>

<style scoped>

.container {
  margin: 40px 0;
}

h2 {
  font-weight: 600;
  margin-bottom: 0;
}

.carousel__item {
  margin: 10px 0;

}

</style>