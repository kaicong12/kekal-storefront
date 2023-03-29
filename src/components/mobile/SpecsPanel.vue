<template>
  <ul class="list-features">
    <li v-for="(value, spec) in specs" :key="spec">
      <span class="t-left">{{spec}}</span>
      <span class="t-right f-bold">{{value}}</span>
    </li>
  </ul>
</template>

<script>
export default {
  name: "SpecsPanel",
  props: {
    specs: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>

.f-bold {
  font-weight: 600;
}

ul {
  font-size: 14px;
  padding: 0 20px 5px 20px;
}

ul > li {
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
  position: relative;
  text-transform: capitalize;
  list-style: none;
  text-decoration: none;
  outline: none
}
</style>