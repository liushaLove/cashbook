import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Nav from '@/components/Nav.vue'
import Layout from '@/components/Layout.vue';
import Icon from '@/components/Icon.vue';

createApp(App).component('Nav',Nav).
component('Layout',Layout).
component('Icon',Icon).
use(store).use(router).
mount('#app');
