!<template>
  <div class="header">
        <img src="../assets/icons/Logo.svg" alt="logo" class="logo">
        <button>
            <img src="../assets/icons/Frame.svg" alt="facebook icon">
            Facebook Page
        </button>
    </div>
</template>

<script>
export default {
    name: "NavBar"
}
</script>

<style scoped>
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 50px;
}

.header button:hover {
    background: rgba(255, 255, 255, 0.5);
}
</style>