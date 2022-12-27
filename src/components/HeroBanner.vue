<template>
    <!-- Top Section -->
    <div class="storefront">
        <NavBar />
        <div class="slogan">
            <h1 class="slogan-h1">Your one stop authorized motorcycle dealer</h1>
            <p class="slogan-p">
                Providing all of your needs about motorcycle. Your satisfaction is our priority.
            </p>
            <button class="whatsapp-button">
                <img src="../assets/icons/WhatsApp.svg" alt="whatsapp" class="icon">
                Contact Us
            </button>
        </div>
    </div>

    <!-- Middle section -->
    <section class="services">
        <div class="service-container">
            <div class="services-text">
                <h2>Bike servicing at its best</h2>
                <p>
                    Peniagaan Motor Kekal offers maintenance services 
                    and repair works, installation of parts and accessories, 
                    and inspection services. We are passionate about helping you
                    with complete care for your motorcycle.
                </p>
            </div>        
            <img src="../assets/repairWorker.jpg" alt="repairWorker">
        </div>
        <div class="service-available">
            <ServiceAvailable 
            :display="Installation"
            imageAlt="Installation"
            :title="installation.title"
            :text="installation.text"
            />

            <ServiceAvailable 
            :display="Inspection"
            imageAlt="Inspection"
            :title="inspection.title"
            :text="inspection.text"
            />

            <ServiceAvailable 
            :display="Maintenance"
            imageAlt="Maintenance"
            :title="maintenance.title"
            :text="maintenance.text"
            />

            <ServiceAvailable 
            :display="Repairs"
            imageAlt="Repairs"
            :title="repairs.title"
            :text="repairs.text"
            />
        </div>
    </section>

    
    <!-- contact us section -->
    <section class="contact-us">
        <div class="left-container">
            <img src="../assets/location.png" alt="shop-location" class="shop-location-img">
            <div class="contact-information">
                <div class="contact-details">
                    <h3>Give us a call</h3>
                    <p><span><img src="../assets/icons/Call.svg" alt="call"></span>+607 355 1943</p>
                </div>
                <div class="location">
                    <h3>Our Location</h3>
                    <p><span><img src="../assets/icons/Pin.svg" alt="call"></span>5, Jln Seroja 49, <br>Taman Johor Jaya, <br>81100 Johor Bahru</p>
                </div>
            </div>
        </div>
        

        <form @submit.prevent="sendMessage" class="input-form">
            <label for="name">Name</label>
            <input type="text" id="name" placeholder="Enter your name here">
            <label for="phone-number">Phone No.</label>
            <input type="text" id="phone-number" placeholder="Enter your phone no. here">
            <label for="name">Message</label>
            <textarea name="message" id="message" cols="30" rows="7"></textarea>
            <button class="contact-us-button">Send Message</button>
        </form>
    </section>

    <!-- footer section -->
    <FooterBar />

</template>

<script>
import NavBar from '@/components/NavBar.vue'
import ServiceAvailable from '@/components/ServiceAvailable.vue'
import FooterBar from '@/components/Footer.vue'

import Installation from '@/assets/icons/installation.svg'
import Inspection from '@/assets/icons/inspection.svg'
import Repairs from '@/assets/icons/repairs.svg'
import Maintenance from '@/assets/icons/maintenance.svg'

export default {
    name: "HeroBanner",
    components: {
        NavBar,
        ServiceAvailable,
        FooterBar,
    },
    setup() {
        return {
            Installation,
            Inspection,
            Repairs,
            Maintenance
        }
    },
    data() {
        return {
            installation: {
                title: "Installation",
                text: "Installation of parts and accessories"
            },
            inspection: {
                title: "Inspection",
                text: "Evaluate and send your motorcycle to JPJ inspection"
            },
            repairs: {
                title: "Repairs",
                text: "Problem diagnosis, evaluation and repair services"
            },
            maintenance: {
                title: "Maintenance",
                text: "Overhaul, tyre change, tuning and alignment services"
            }
        }
    },
    methods: {
        sendMessage() {
            console.log("Hello world")
        }
    }
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
    border: 1px solid black;
    padding-bottom: 20px;
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
    font-size: 18px;
}

.whatsapp-button {
    background-color: white;
    color: #202D8E;
    border-radius: 6px;
    padding: 12px 24px;
}

.whatsapp-button:hover {
    background-color: rgba(255, 255, 255, 0.5)
}

.services {
    background: #F7F7FD;
    padding-top: 100px
}

.service-container {
    margin-left: 150px;
    margin-right: 80px;
}

.service-container img {
    width: 100%;
}

.services-text {
    display: flex;
    justify-content: space-between;
}

.services-text h2 {
    font-weight: 600;
    font-size: 36px;
    margin-top: 20px;
    text-align: left;
}

.services-text p {
    color: #1F1F1F;
    width: 40%;
    line-height: 25px;
    text-align: right;
    margin: 10px;
}

.service-available {
    display: flex;
    justify-content: space-between;
    padding: 100px 70px;
    gap: 50px;
}

.left-container {
    width: 50%;
    margin-left: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 50px;
}

.shop-location-img {
    max-height: 450px;
    width: 100%;
    object-fit: cover;
}

.contact-us, .contact-information {
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 50px;
}

.contact-information {
    margin-top: 20px;
    justify-content: space-evenly;
}

.contact-us-button {
    background: #202D8E;
    padding: 15px 30px;
    margin-left: auto;
    margin-top: 20px;
}

.contact-us-button:hover {
    background-color: rgba(42, 109, 243, 0.5)
}

.input-form {
    display: flex;
    flex-direction: column;
    width: 500px;
    gap: 5px;
}

.input-form label {
    margin-right: auto;
    padding-top: 10px;
}

.input-form input, textarea {
    font-size: 16px;
    padding: 7px;
    font-family: 'Poppins', sans-serif;
}

.contact-details, .location {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    align-self: flex-start;
}

.contact-details p, .location p{
    display: flex;
    align-items: flex-start;
    gap: 10px;
    text-align: left;
    margin-top: 0px;
}

button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid white;
}
</style>