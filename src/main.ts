import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import '@vant/touch-emulator';

// 引入vant-ui组件库
import Vant from 'vant';
import 'vant/lib/index.css';

createApp(App)
    .use(store)
    .use(router)
    .use(Vant)
    .mount("#app");
