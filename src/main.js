// import './assets/main.css'

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import{faBars, faFileLines, faFileCode, faLaptopCode, faLink, faRotate, faAsterisk, faCircleUp, faDownload, faTriangleExclamation} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';


library.add(faBars, faGithub, faInstagram, faLinkedin, faFileLines, faFileCode, faLaptopCode, faLink, faCircleUp, faAsterisk, faRotate, faDownload, faTriangleExclamation);

createApp(App)
.use(router)
.component('fa', FontAwesomeIcon)
.mount('#app');


