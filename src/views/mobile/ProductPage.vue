<template>
  <div>
      <h1>{{ product.name }}</h1>
      <img :src="product.imageUrl" alt="Product Image" />
      <!-- Add more product details -->
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import {fetchProductData} from "@/scripts/db";

export default {
  name: "ProductPage",
  props: ['id'],
  setup(props) {
    const product = ref(null);
    const route = useRoute();

    onMounted(async () => {
      const productId = props.id || route.params.id;
      product.value = await fetchProductData(productId);
    });

    return {
      product,
    };
  },
}
</script>

<style scoped>

</style>