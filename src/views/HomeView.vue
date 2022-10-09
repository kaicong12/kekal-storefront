<template>
  <div class="home">
    <HeroBanner />
  </div>
</template>

<script>
// @ is an alias to /src
import HeroBanner from '@/components/HeroBanner.vue'

export default {
  name: 'HomeView',
  components: {
    HeroBanner
  }
}
</script>
