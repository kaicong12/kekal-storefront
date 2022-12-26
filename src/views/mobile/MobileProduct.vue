<template>
  <MobileHeader />
  <div class="wrapper">
    <div class="shop-top-control">
      <form action="" class="select-item">
        <span>Sort By</span>
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

  <div class="pagination">
    <button type="button">Previous</button>
    <button>Next</button>
  </div>

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
.wrapper {
  padding: 0 30px;
}

.pagination {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 20px;
}

.pagination button {
  width: 150px;
  background-color: red;
  border: 1px solid black;
  justify-content: center;
}
</style>