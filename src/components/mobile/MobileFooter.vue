<template>
  <footer class="footer-container">
    <div class="storefront-image-container">
      <img class="storefront-image" src="@/assets/storefront.jpg" alt="storefront-background">
    </div>
    <div class="row-container">
      <div class="brand-logo-container">
        <img src="@/assets/icons/Logo.svg" alt="img">
      </div>
      <ul class="contact-information">
        <li>
          <span><font-awesome-icon icon="fa-solid fa-location-dot" /></span>
          5, Jln Seroja, 49, Taman Johor Jaya, 81100 J.B.
        </li>
        <li>
          <span><font-awesome-icon icon="fa-solid fa-phone" /></span>
          +6 0127126128
        </li>
        <li>
          <span><font-awesome-icon icon="fa-solid fa-envelope" /></span>
          motorkekal@gmail.com
        </li>
        <li>
          <span><font-awesome-icon icon="fa-solid fa-clock" /></span>
          Mon-Sun 9:00a.m. - 7:00 p.m. Fri:Closed
        </li>
      </ul>

      <!-- Custom Menu-->
      <div class="custom-menu">
        <h2 class="custom-menu-title">Information</h2>
        <ul class="custom-menu-items">
          <li>Contact Us</li>
          <li>FAQs</li>
        </ul>
      </div>
    </div>
    
    <!-- Social Platforms -->
    <div class="socials">
      <ul class="social-platforms">
        <li><a href="https://www.facebook.com/PerniagaanMotorKekal"><font-awesome-icon icon="fa-brands fa-facebook" /></a></li>
        <li><a href="https://wa.me/60127126128"><font-awesome-icon icon="fa-brands fa-whatsapp" /></a></li>
      </ul>
    </div>

  </footer>
</template>

<script>
export default {
  name: "MobileFooter"
}
</script>

<style scoped>
.footer-container {
  background: #151515;
  margin-bottom: -20px;
}

.storefront-image-container {
  display: grid;
  height: 100%;
  margin: 0;
  padding: 0
}

.storefront-image {
  max-width: 100%;
  max-height: 100vh;
  margin: auto;
}

.row-container {
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}

.brand-logo-container {
  margin: 20px 0;
}

.contact-information,
.custom-menu-items {
  padding: 0;
  margin: 0;
}

.contact-information li,
.custom-menu-items li {
  font-size: 16px;
  color: #868686;
  line-height: 26px;
  font-weight: 500;
  padding-top: 5px;
  padding-bottom: 5px;
  text-align: left;
}

.contact-information li span {
  padding-right: 5px;
  color: #bf1b1b;
}

.custom-menu-title {
  text-align: left;
  color: white;
  margin-bottom: 10px;
  margin-top: 30px;
}

.social-platforms li {
  list-style: none;
  display: inline-block;
  font-size: 23px;
  color: #555555;
}

.social-platforms > li > a {
  height: 50px;
  line-height: 50px;
  min-width: 50px;
  margin-bottom: 20px;
  font-size: 20px;
  margin-right: 20px;
  text-align: center;
  display: inline-block;
  color: #fff;
  background-color: #333;
  border-radius: 50%;
}
</style>