<template>
  <MobileHeader />

  <!-- Trail List -->
  <div class="breadcrumb-trail">
    <ul class="trail-items">
      <li class="trail-begin"><a href="/mobile">Home</a></li>
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
        <span>Brand: </span>
        <select name="sort" id="sort">
          <option value="1">Honda</option>
          <option value="2">Modenas</option>
          <option value="3">Suzuki</option>
          <option value="4">Yamaha</option>
        </select>
      </form>

      <form action="" class="select-item">
        <span>Sort By: </span>
        <select name="sort" id="sort">
          <option value="1">Price: Low to High</option>
          <option value="2">Price: High to Low</option>
          <option value="3">Manufacturing Year</option>
          <option value="4">Brand</option>
        </select>
      </form>
    </div>
    <MobileProductCard v-for="product in products" :key="product" :product="product"/>
  </div>
  <!-- Filter area ends -->

  <!-- Pagination button starts -->
  <div class="pagination" v-if="!loading">
    <button>Previous</button>
    <button>Next</button>
  </div>
  <!-- Pagination button ends -->

  <LoadingPage v-if="loading" @scroll.prevent/>
  <MobileFooter v-if="!loading" />
</template>

<script>
import {ref} from "vue";
import {collection, onSnapshot, query} from "firebase/firestore";
import {db} from "@/scripts/firebase";

import {retrieveImageUrl} from "@/scripts/storage";
import MobileHeader from "@/components/mobile/MobileHeader";
import MobileFooter from "@/components/mobile/MobileFooter";
import LoadingPage from "@/components/mobile/LoadingPage";
import MobileProductCard from "@/components/mobile/MobileProductCard";

const motorcycleQuery = query(collection(db, "motorcycles"))

export default {
  name: "MobileProduct",
  components: {
    MobileHeader,
    MobileFooter,
    LoadingPage,
    MobileProductCard
  },
  data() {
    return {
      unsub: [],
      products: [],
      loading: true,
      disablePrevious: false,
      disableNext: false
    }
  },
  mounted() {
    const [unsubMotorcycles, motorcycles] = this.listMotorcycles()
    this.unsub.push(unsubMotorcycles)
    this.products = motorcycles
  },
  unmounted() {
    this.unsub.forEach((callback) => {
      callback()
    })
  },
  methods: {
    listMotorcycles() {
      const motorcycles = ref([])
      const unsubscribe = onSnapshot(motorcycleQuery, async (querySnapshot) => {
        motorcycles.value = await Promise.all(querySnapshot.docs.map(async (doc) => {
            const motorcycle = doc.data()
            const downloadUrl = await retrieveImageUrl(motorcycle.path)
            return {
                "id": doc.id,
                "brand": motorcycle.brand,
                "model": motorcycle.model,
                "path": motorcycle.path,
                "imageUrl": downloadUrl,
                "year": motorcycle.year,
                "gear": motorcycle.gear,
                "price": motorcycle.price,
                "engine": motorcycle.engine
            }
          }))

        this.loading = false
        })

      return [unsubscribe, motorcycles]
    }
  },
}
</script>

<style scoped>

.trail-items {
  padding: 25px 30px 20px;
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
  margin-top: 10px;
  vertical-align: top;
  line-height: 28px;
}

.select-item span {
  margin-right: 5px;
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
</style>