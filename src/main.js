import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import mitt from 'mitt'

const VUE_APP_VERSION = require('../package.json').version
const vers = window.localStorage.getItem("Version");
if(VUE_APP_VERSION != vers){
  localStorage.clear()
  window.localStorage.setItem("Version", VUE_APP_VERSION);
  location.reload()
}

const app=createApp(App)

app.config.globalProperties.$bus=new mitt();

app.use(router)
app.mount('#app')