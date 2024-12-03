import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import 'vuetify/styles';
import '@mdi/font/css/materialdesignicons.css';
import './assets/main.css';
import App from './App.vue';

const vuetify = createVuetify({
  components,
  directives,
  icons: { defaultSet: 'mdi' },
});

const app = createApp(App);

app.use(vuetify).use(createPinia());

app.mount('#app');
