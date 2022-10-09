<template>
    <div class="storefront">
        <div class="header">
            <img src="../assets/Logo.svg" alt="logo" class="logo">
            <button>
                <img src="../assets/Frame.svg" alt="facebook icon">
                Facebook Page
            </button>
        </div>

        <div class="slogan">
            <h1 class="slogan-h1">Your one stop authorized motorcycle dealer</h1>
            <p class="slogan-p">
                Providing all of your needs about motorcycle. Your satisfaction is our priority.
            </p>
            <button class="whatsapp-button">
                <img src="../assets/WhatsApp.svg" alt="whatsapp" class="icon">
                Contact Us
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: "HeroBanner"
}
</script>

<style scoped>

.storefront {
    background-image: linear-gradient(
        0deg, rgba(31, 31, 31, 0.4), 
        rgba(31, 31, 31, 0.4)), 
        url("../assets/storefront.jpg");
    background-size: 100%;
    height: 50vh;
    display: flex;
    flex-direction: column;
    align-content: space-around;
    gap: 80px;
}

.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 50px;
}

button {
    display: flex;
    align-items: center;
    gap: 10px;
    background: rgba(255, 255, 255, 0.1);
    font-family: 'Inter';
    font-weight: 700;
    font-size: 16px;
    color: #FFFFFF;
    border: 1px solid white;
    border-radius: 5px;
    padding: 10px 30px;
}

.header button:hover {
    background: rgba(255, 255, 255, 0.5);
}

.slogan {
    color: white;
    text-align: left;
    margin-left: 50px;
    width: 725px;
}

.slogan h1 {
    margin-bottom: 0px;
    font-size: 48px;
}

.slogan p {
    margin-top: 0px;
    font-size: 20px;
}

.whatsapp-button {
    background-color: white;
    color: #202D8E;
    border-radius: 6px;
    padding: 12px 24px;
    font-family: 'Inter';
}

.whatsapp-button:hover {
    background-color: rgba(255, 255, 255, 0.5)
}

</style>