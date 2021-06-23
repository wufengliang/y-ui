import { createApp } from 'vue';
import YDesign from '@packages';
import App from './App.vue';
import router from './router';

createApp(App)
  .use(router)
  .use(YDesign)
  .mount('#app');
