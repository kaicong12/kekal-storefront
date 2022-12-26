!<template>
  <div class="footer-container">
    <div class="text-box">
        <h2>Let us know your needs</h2>
        <p>We will provice the best service. Your happiness means the world to us</p>
    </div>
    <button>
        <span><img src="../assets/icons/redWhatsapp.svg" alt="red-whatsapp-icon"></span>
        Contact Us
    </button>
  </div>

  <h6>Copyright © 2022, Perniagaan Motor Kekal. All Rights Reserved.</h6>
</template>

<script>
export default {
    name: "FooterBar",

}
</script>

<style scoped>
    .footer-container {
        background: #A54E50;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 70px 100px;
        margin: 50px 100px;
        border-radius: 10px;
    }

    .text-box {
        display: flex;
        flex-direction: column;
    }

    .text-box h2, p {
        color: white;
        text-align: left;
        margin: 0;
    }

    .text-box h2 {
        font-weight: 600;
        font-size: 42px;
    }

    .text-box p {
        font-weight: 400;
        font-size: 16px;
        margin-top: 20px;
    }

    button {
        background: white;
        color: #A54E50;
        height: 50%;
    }

    button:hover {
        background-color: rgba(255, 255, 255, 0.5)
    }

    h6 {
        color: #656567;
    }
</style>