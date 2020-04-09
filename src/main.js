import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@progress/kendo-ui'
import '@progress/kendo-theme-default/dist/all.css'
import Inputs from './kendo/inputs'
import DateInputs from './kendo/date-inputs'
import Dropdowns from './kendo/dropdowns'
import Upload from './kendo/upload'

Vue.config.productionTip = false

new Vue({
  Upload,
  Inputs,
  DateInputs,
  Dropdowns,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
