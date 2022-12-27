<template>
  <MobileHeader />
  <MobileHeroBanner />
  <MobileService />
  <MobileTestimonial />
  <MobileFooter />
</template>

<script>
import MobileHeader from "@/components/mobile/MobileHeader";
import MobileHeroBanner from "@/components/mobile/MobileHeroBanner";
import MobileService from "@/components/mobile/MobileService";
import MobileTestimonial from "@/components/mobile/MobileTestimonial";
import MobileFooter from "@/components/mobile/MobileFooter";

export default {
  name: "MobileHome",
  components: {
    MobileHeader,
    MobileHeroBanner,
    MobileService,
    MobileTestimonial,
    MobileFooter
  }
}
</script>

<style scoped>

</style>