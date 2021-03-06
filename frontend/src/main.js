import Vue from 'vue'
import VueChatScroll from 'vue-chat-scroll'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

Vue.use(VueChatScroll)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
