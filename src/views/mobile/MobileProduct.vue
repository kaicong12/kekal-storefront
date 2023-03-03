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
        <span>Brand: </span>
        <select name="sort" id="sort" v-model="brandValue">
          <option value="All">Show All</option>
          <option value="Honda">Honda</option>
          <option value="Yamaha">Modenas</option>
          <option value="SYM">Suzuki</option>
        </select>
      </form>
      <form action="" class="select-item">
        <span>Sort By: </span>
        <select name="sort" id="sort" v-model="sortValue">
          <option value="1">Price: Low to High</option>
          <option value="2">Price: High to Low</option>
          <option value="3">Manufacturing Year</option>
          <option value="4">Brand</option>
        </select>
      </form>
    </div>
  </div>
  <!-- Filter area ends -->

  <div class="product-card">
    <MobileProductCard v-for="product in products" :key="product" :product="product"/>
  </div>

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
import {collection, getDocs, limit, orderBy, query, where} from "firebase/firestore";
import {db} from "@/scripts/firebase";

import {retrieveImageUrl} from "@/scripts/storage";
import MobileHeader from "@/components/mobile/MobileHeader";
import MobileFooter from "@/components/mobile/MobileFooter";
import LoadingPage from "@/components/mobile/LoadingPage";
import MobileProductCard from "@/components/mobile/MobileProductCard";


const motorRef = collection(db, "motorcycles");
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
      products: [],
      loading: true,
      sortValue: 1,
      brandValue: "All",
      pageSize: 5,
    }
  },
  mounted() {
    this.fetchMotorcycles(
        this.sortValue, this.brandValue, this.pageSize
    )
  },
  methods: {
    async fetchMotorcycles() {
      let ordering
      if (this.sortValue === "1") {
          ordering = orderBy("price")
      } else if (this.sortValue === "2") {
          ordering = orderBy("price", "desc")
      } else if (this.sortValue === "3") {
          ordering = orderBy("year")
      } else {
          ordering = orderBy("brand")
      }

      let filter = null
      if (this.brandValue === "Honda") {
          filter = where("brand", "==", "Honda")
      } else if (this.brandValue === "SYM") {
          filter = where("brand", "==", "SYM")
      } else if (this.brandValue === "Yamaha") {
          filter = where("brand", "==", "Yamaha")
      }

      // query the first page of the document
      const q = query(
          motorRef,
          filter,
          ordering,
          limit(this.pageSize)
      );

      this.filter = filter
      this.ordering = ordering

      const motorcycles = ref([])
      const querySnapshot = await getDocs(q);
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
              // "gear": motorcycle.gear,
              "price": motorcycle.price,
              "engine": motorcycle.engine
          }
      }))

      this.loading = false
      this.products = motorcycles
    },
  },
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
  vertical-align: top;
  line-height: 28px;
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
</style>