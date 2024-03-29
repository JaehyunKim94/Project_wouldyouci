import Vue from 'vue'
import App from './components/App.vue'
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import infiniteScroll from "vue-infinite-scroll";


Vue.config.productionTip = false
Vue.use(infiniteScroll);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
