import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

import * as loaders from 'vue-content-loader';
Object.keys(loaders).forEach(key => {
  console.log('-----------------------------');
  Vue.component(key, loaders[key]);
});
//   ContentLoader,
//   FacebookLoader,
//   CodeLoader,
//   BulletListLoader,
//   InstagramLoader,
//   ListLoader

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
