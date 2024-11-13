import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false;
Vue.component('dj-header', () => import('@/components/header/header.vue'));
Vue.component('dj-footer', () => import('@/components/footer/footer.vue'));
Vue.component('dj-right', () => import('@/components/right/right.vue'));
Vue.component('dj-right_con', () => import('@/components/right_con/right_con.vue'));
App.mpType = 'app';
Vue.use(ElementUI);
const app = new Vue({
    ...App
})
app.$mount()
