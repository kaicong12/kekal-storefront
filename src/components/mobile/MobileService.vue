<template>
  <div class="about-section">
    <h2>Biking Service at its best</h2>
    <h4>We are passionate about helping you with complete care for your motorcycle.</h4>
    <div class="service-available">
      <div class="first-row-service">
        <ServiceAvailable
          :display='require("@/assets/icons/installation.svg")'
          imageAlt="Installation"
          title="Installation"
          text="Installation of parts and accessories"
        />
        <ServiceAvailable
          :display='require("@/assets/icons/inspection.svg")'
          imageAlt="Inspection"
          title="Inspection"
          text="Evaluate and send your motorcycle to JPJ inspection"
        />
      </div>
      <div class="second-row-service">
        <ServiceAvailable
          :display='require("@/assets/icons/repairs.svg")'
          imageAlt="Repairs"
          title="Repairs"
          text="Problem diagnosis, evaluation and repair services"
        />
        <ServiceAvailable
          :display='require("@/assets/icons/maintenance.svg")'
          imageAlt="Maintenance"
          title="Maintenance"
          text="Overhaul, tyre change, tuning and alignment services"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ServiceAvailable from "@/components/ServiceAvailable";

export default {
  name: "MobileService",
  components: {
    ServiceAvailable
  }
}
</script>

<style scoped>
h2 {
  font-weight: 600;
  margin-bottom: 0;
}

h4 {
  font-weight: 400;
  padding: 0 20px;
  margin-top: 15px;
}

.service-available {
  padding: 10px;
}

.first-row-service,
.second-row-service {
  display: flex;
  flex-direction: row;
  gap: 10px;
}
</style>