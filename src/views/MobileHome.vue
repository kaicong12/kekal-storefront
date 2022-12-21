<template>
  <MobileHeader />
  <MobileHeroBanner />
  <MobileService />
  <MobileFooter />
</template>

<script>
import MobileHeader from "@/components/mobile/MobileHeader";
import MobileHeroBanner from "@/components/mobile/MobileHeroBanner";
import MobileService from "@/components/mobile/MobileService";
import MobileFooter from "@/components/mobile/MobileFooter";

export default {
  name: "MobileHome",
  components: {
    MobileHeader,
    MobileHeroBanner,
    MobileService,
    MobileFooter
  }
}
</script>

<style scoped>

</style>