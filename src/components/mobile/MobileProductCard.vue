<template>
  <div class="product-container">
    <img :src="product.imageUrl" alt="product image">
    <h3>{{product.brand}} {{product.model}}</h3>

    <ul class="product-information">
      <li><font-awesome-icon icon="fa-solid fa-copyright" />{{ product.brand }}</li>
      <li><font-awesome-icon icon="fa-solid fa-motorcycle" />{{ product.engine }}</li>
      <li><font-awesome-icon icon="fa-solid fa-tags" />{{ product.price }}</li>
      <li><font-awesome-icon icon="fa-solid fa-calendar" />{{ product.year }}</li>
      <li><font-awesome-icon icon="fa-solid fa-gears" />{{ product.gear }}</li>
    </ul>

  </div>
</template>

<script>
export default {
  name: "MobileProductCard",
  props: {
    product: Object
  },
}
</script>

<style scoped>
  .product-container {
    margin: 30px 0;
    border-radius: 8px;
    overflow: hidden;
    position: relative;
    border: 2px solid #F1F1F1;
    padding: 15px 15px 20px;
    background-color: #fff;
  }

  img {
    max-width: 100%;
    height: 300px;
    border-radius: 8px;
  }

  .product-information {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: wrap;
    padding-left: 30px;
  }

  .product-information li {
    width: 100px;
    display: flex;
    text-align: center;
    margin: 5px 15px;
    flex-direction: row;
    gap: 10px;
  }
</style>