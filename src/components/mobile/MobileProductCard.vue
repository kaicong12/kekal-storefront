<template>
  <div class="product-container">
    <img :src="product.imageUrl" alt="product image">
    <h3>{{product.brand}} {{product.model}}</h3>

    <ul class="product-information">
      <li><font-awesome-icon icon="fa-solid fa-copyright" />{{ product.brand }}</li>
      <li><font-awesome-icon icon="fa-solid fa-motorcycle" />{{ product.engine }}</li>
      <li><font-awesome-icon icon="fa-solid fa-tags" />{{ product.price }}</li>
      <li><font-awesome-icon icon="fa-solid fa-calendar" />{{ product.year }}</li>
    </ul>

  </div>
</template>

<script>
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
export default {
  name: "MobileProductCard",
  components: {FontAwesomeIcon},
  props: {
    product: Object
  },
}
</script>

<style scoped>
  .product-container {
    margin: 30px 15px;
    border-radius: 8px;
    position: relative;
    border: 2px solid #F1F1F1;
    padding: 15px 15px 20px;
    background-color: #fff;
    max-width: 350px;
  }

  img {
    height: 300px;
    width: 300px;
    border-radius: 8px;
  }

  .product-information {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    padding-left: 25px;
  }

  .product-information li {
    width: 80px;
    display: flex;
    margin: 5px 15px;
    flex-direction: row;
    gap: 10px;
  }

  .product-information > li > * {
    color: #bf1b1b;
    font-size: 16px;
  }
</style>