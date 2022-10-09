<template>
    <!-- Top Section -->
    <section class="storefront">
        <NavBar />
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
    </section>

    <!-- Middle section -->
    <section class="services">
        <div class="service-container">
            <div class="services-text">
                <h2>Bike servicing at its best</h2>
                <p>
                    Penanganan Motor Kekal offers maintenance services 
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


    <!-- footer section -->
    <footer>

    </footer>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import Installation from '@/assets/installation.svg'
import Inspection from '@/assets/inspection.svg'
import Repairs from '@/assets/repairs.svg'
import Maintenance from '@/assets/maintenance.svg'
import ServiceAvailable from '@/components/ServiceAvailable.vue'

export default {
    name: "HeroBanner",
    components: {
        NavBar,
        ServiceAvailable
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
                text: "Evaluate and send your motorcycle to LTA inspection"
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
    gap: 50px;
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
}

.service-container {
    padding: 100px 80px;
}

.services-text {
    display: flex;
    justify-content: space-between;
}

.services h2 {
    font-weight: 600;
    font-size: 36px;
    margin-top: 20px;
}

.services p {
    color: #1F1F1F;
    width: 40%;
    line-height: 25px;
    text-align: right;
    margin: 10px;
}

.service-available {
    display: flex;
    justify-content: space-between;
    padding: 0px 70px;
    gap: 50px;
}

</style>