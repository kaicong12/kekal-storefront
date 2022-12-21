<template>
  <div class="header-device-mobile">
      <div class="wrapper">

        <!-- Logo Area Start-->
        <div class="item mobile-logo">
            <div class="logo">
                <a href="#">
                    <img src="@/assets/Logo.svg" alt="img">
                </a>
            </div>
        </div>
        <!-- Logo Area Ends -->
        <font-awesome-icon @click="toggleMenu = !toggleMenu" class="menu-icon" icon="fa-solid fa-bars" />
      </div>

      <!-- Navigation Area Start -->
      <transition name="mobile-nav">
        <nav class="mobile-nav" v-show="toggleMenu">
            <div class="mobile-nav-title">
              <span>Main Menu</span>
              <span class="mobile-nav-close-icon" @click="this.toggleMenu = false"><font-awesome-icon icon="fa-solid fa-x fa-2xs" /></span>
            </div>
            <div class="mobile-nav-panel">
              <ul>
                  <li><a href="#">Home</a></li>
                  <li><a href="#">Product</a></li>
                  <li><a href="#">Promotion</a></li>
                  <li><a href="#">Contact Us</a></li>
              </ul>
            </div>
        </nav>
      </transition>
      <!-- Navigation Area End -->
  </div>
</template>

<script>
export default {
  name: "MobileHeader",
  data() {
    return {
      toggleMenu: true,
    }
  }
}
</script>

<style scoped>
  .wrapper {
    display: flex;
    flex-direction: row;
    background-color: rgb(32, 32, 32);
    padding: 25px 0px;
    transition: all 0.4s ease-out 0s;
  }

  img {
    width: 200px;
    margin-left: 20px;
  }

  .menu-icon {
    position: absolute;
    top: 32px;
    right: 25px;
    height: 25px;
    width: auto;
    color: white
  }

  .mobile-nav {
    width: 300px;
    display: flex;
    flex-direction: column;
    position: fixed;
    height: 100%;
    top: 0;
    left: 0;
    box-shadow: 3px 5px 14px -3px rgb(0 0 0 / 11%);
    background-color: white;
  }

  .mobile-nav-title {
    text-transform: uppercase;
    border-bottom: 1px solid #eee;
    height: 50px;
    position: relative;
  }

  .mobile-nav-title span:nth-child(1) {
    display: block;
    text-align: center;
    line-height: 50px;
    text-transform: uppercase;
  }

  .mobile-nav-close-icon {
    width: 50px;
    height: 50px;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 10;
    border-left: 1px solid #eee;
    text-align: center;
    line-height: 50px;
    color: #000;
  }

  .mobile-nav-panel > ul {
    padding: 0;
    margin: 0;
  }

  .mobile-nav-panel li {
    list-style: none;
    padding: 0 20px;
    display: list-item;
    border-bottom: 1px solid #eee;
  }

  .mobile-nav-title,
  .mobile-nav-panel li a {
    color: #000;
    font-size: 18px;
    line-height: 50px;
  }

  .mobile-nav-enter-active,
  .mobile-nav-leave-active {
    transition: all 1s ease;
  }
  .mobile-nav-enter {
    transform: translateX(-250px);
  }
  .mobile-nav-enter-to {
    transform: translateX(0);
  }
  .mobile-nav-leave-to {
    transform: translateX(-250px);
  }
</style>