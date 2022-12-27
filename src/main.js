import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// import specific icon
import { fab, faWhatsapp, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faBars, faX, faLocationDot,
    faPhone, faEnvelope, faClock,
    faCalendar, faGears, faCopyright,
    faTags, faMotorcycle, faAnglesRight
} from '@fortawesome/free-solid-svg-icons'

library.add(
    fab, faBars, faX, faWhatsapp,
    faLocationDot, faPhone, faEnvelope, faClock,
    faFacebook, faCalendar, faGears, faCopyright,
    faTags, faMotorcycle, faAnglesRight
)

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon) 
    .use(router)
    .mount('#app')