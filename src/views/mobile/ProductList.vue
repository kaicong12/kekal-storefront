<template>
  <MobileHeader />

  <!-- Trail List -->
  <div class="breadcrumb-trail">
    <ul class="trail-items">
      <li class="trail-begin"><a href="/">Home</a></li>
      <li class="trail-arrow"><font-awesome-icon icon="fa-solid fa-angles-right" /></li>
      <li class="trail-active">Products</li>
    </ul>
  </div>
  <!-- Trail list ends -->

  <!-- Filter area starts -->
  <div class="wrapper">
    <h2 class="page-title">Products</h2>
    <div class="shop-top-control">
      <form action="" class="select-item">
        <label>Brand: </label>
        <select name="brand" id="brand" v-model="brandValue" @change="loadProducts">
          <option value="All">Show All</option>
          <option value="Honda">Honda</option>
          <option value="Yamaha">Modenas</option>
          <option value="SYM">SYM</option>
        </select>
      </form>
      <form action="" class="select-item">
        <label>Sort By: </label>
        <select name="sort" id="sort" v-model="sortValue" @change="loadProducts">
          <option value="1">Price: Low to High</option>
          <option value="2">Price: High to Low</option>
          <option value="3">Manufacturing Year</option>
        </select>
      </form>
    </div>
  </div>
  <!-- Filter area ends -->

  <div class="product-card">
    <MobileProductCard
        v-for="product in products"
        :key="product"
        :product="product"
        @click="goToProductDetails(product.id)"
    />
  </div>

  <!-- Pagination button starts -->
  <div class="pagination" v-if="!loading">
    <button @click="prevPage" :disabled="!hasPrev">Previous</button>
    <button @click="nextPage" :disabled="!hasNext">Next</button>
  </div>
  <!-- Pagination button ends -->

  <LoadingPage v-if="loading" @scroll.prevent/>
  <MobileFooter v-if="!loading" />
</template>

<script>
import {ref, onMounted} from "vue";
import { useRouter } from 'vue-router';
import {collection, getDocs, limit, orderBy, query, where, startAfter} from "firebase/firestore";
import {db} from "@/scripts/firebase";

import {retrieveImageUrl} from "@/scripts/storage";
import {fetchProducts} from "@/scripts/db";
import MobileHeader from "@/components/mobile/MobileHeader";
import MobileFooter from "@/components/mobile/MobileFooter";
import LoadingPage from "@/components/mobile/LoadingPage";
import MobileProductCard from "@/components/mobile/MobileProductCard";


const motorRef = collection(db, "motorcycles");
export default {
  name: "ProductList",
  components: {
    MobileHeader,
    MobileFooter,
    LoadingPage,
    MobileProductCard
  },
  setup() {
    const products = ref([]);
    const pageSize = ref(5);
    const lastVisible = ref(null);
    const firstVisible = ref(null);
    const hasNext = ref(true);
    const hasPrev = ref(false);
    const brandValue = ref("All");
    const sortValue = ref("1");
    const loading = ref(false);
    const sort = ref("price");
    const sortOrder = ref("asc");


    const router = useRouter();

    function goToProductDetails(productId) {
      router.push({ name: 'ProductDetails', params: { id: productId } });
    }


    async function loadProducts() {

      loading.value = true;
      if (sortValue.value === "2") {
        sort.value = "price"
        sortOrder.value = "desc"
      } else if (sortValue.value === "3") {
        sort.value =  "year"
      }

      let q = query(motorRef, orderBy(sort.value, sortOrder.value), limit(Number(pageSize.value)));
      if (brandValue.value !== "All") {
        q = query(
            motorRef,
            orderBy(sort.value, sortOrder.value),
            where("brand", "==", brandValue.value),
            limit(Number(pageSize.value))
        );
      }
      const querySnapshot = await getDocs(q);
      if (!querySnapshot.empty) {
        firstVisible.value = querySnapshot.docs[0];
        lastVisible.value = querySnapshot.docs[querySnapshot.docs.length - 1];
        hasNext.value = !(querySnapshot.size < pageSize.value);
        products.value = await fetchProducts(querySnapshot);
        loading.value = false;
      } else {
        products.value = [];
        hasNext.value = false;
      }
    }

    async function nextPage() {
      if (!hasNext.value) return;
      const q = query(motorRef, orderBy(sort.value, sortOrder.value), startAfter(lastVisible.value), limit(Number(pageSize.value)));
      const querySnapshot = await getDocs(q);
      if (!querySnapshot.empty) {
        loading.value = true;
        firstVisible.value = querySnapshot.docs[0];
        lastVisible.value = querySnapshot.docs[querySnapshot.docs.length - 1];
        hasNext.value = !(querySnapshot.size < pageSize.value);
        hasPrev.value = true;
        products.value = await fetchProducts(querySnapshot);
        loading.value = false;
      } else {
        hasNext.value = false;
      }
    }

    async function prevPage() {
      if (!hasPrev.value) return;
      const q = query(motorRef, orderBy(sort.value, sortOrder.value), startAfter(firstVisible.value), limit(Number(pageSize.value)));
      const querySnapshot = await getDocs(q);
      if (!querySnapshot.empty) {
        loading.value = true;
        firstVisible.value = querySnapshot.docs[querySnapshot.docs.length - 1];
        lastVisible.value = querySnapshot.docs[0];
        hasNext.value = true;
        hasPrev.value = firstVisible.value !== querySnapshot.docs[querySnapshot.docs.length - 1];
        products.value = await Promise.all(querySnapshot.docs.reverse().map(async (doc) => {
              const motorcycle = doc.data()
              const downloadUrl = await retrieveImageUrl(motorcycle.path)
              return {
                  "id": doc.id,
                  "brand": motorcycle.brand,
                  "model": motorcycle.model,
                  "path": motorcycle.path,
                  "imageUrl": downloadUrl,
                  "year": motorcycle.year,
                  // "gear": motorcycle.gear,
                  "price": motorcycle.price,
                  "engine": motorcycle.engine
              }
          }));
        loading.value = false;
      } else {
        hasPrev.value = false;
      }
    }

    onMounted(() => {
      loadProducts()
    })

    return {
      products,
      pageSize,
      loadProducts,
      nextPage,
      prevPage,
      hasNext,
      hasPrev,
      loading,
      brandValue,
      sortValue,
      goToProductDetails,
    }
  }
}
</script>

<style scoped>

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

.page-title {
  margin-bottom: 30px;
  font-size: 20px;
  font-weight: 700;
  text-transform: uppercase;
  color: #222;
  text-align: left;
}

.wrapper {
  padding: 0 30px;
}

.shop-top-control {
  border-radius: 4px;
  padding: 15px 0 15px;
  margin-bottom: 30px;
  background-color: #F1F1F1;
  font-weight: 500;
  color: #888888;
}

.select-item {
  margin-bottom: 10px;
  margin-right: 20px;
  padding: 0;
  vertical-align: top;
  line-height: 28px;
  display: inline-block;
}

.select-item span {
  margin-right: 5px;
}

.chosen-text > span > b::after {
  content: "\f0d7";
    font-size: 14px;
    font-weight: normal;
    color: #aaaaaa;
    position: absolute;
    left: 50%;
    top: 50%;
    line-height: normal;
    margin-left: -5px;
    margin-top: -8px;
}

.pagination {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 20px;
}

.pagination button {
  width: 150px;
  justify-content: center;
  color: #888;
  border: 2px solid #F1F1F1;
  margin-bottom: 20px;
}

.product-card {
  display: flex;
  flex-wrap: wrap;
}

button:not([disabled]) {
  background-color: #bf1b1b;
  color: #fff;
  border-color: transparent;
  transition: background-color 0.3s;
}
</style>