import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Nav from '@/components/Nav.vue'
import Layout from '@/components/Layout.vue';

createApp(App).component('Nav',Nav).component('Layout',Layout).use(store).use(router).mount('#app');
