import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '../public/css/reset.css';
import '../public/fonts/iconfont.css';
import './utils/rem'
import './utils/testingEquipment'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
