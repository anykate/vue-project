import App from '@/App.vue'
import '@/assets/css/index.css'
import router from '@/router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faCircleInfo, faPlus, faSun } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { createApp } from 'vue'

library.add(faSun, faCircleInfo, faPlus)

createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)
  .use(router)
  .mount('#app')
