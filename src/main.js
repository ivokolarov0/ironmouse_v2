import Vue from 'vue';
import App from './components/App/App';

import './assets/scss/main.scss';

Vue.component('v-style', {
  render: function(createElement) {
    return createElement('style', this.$slots.default);
  },
});

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#ironmouse');
