import { createApp } from "vue";

import App from "@/App.vue";
import router from "@/router";
import pinia from '@/stores/index.js'
import CanvasJSChart from '@canvasjs/vue-charts';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

const app = createApp(App);

app.use(pinia)
app.use(router);
app.use(CanvasJSChart); 
app.mount("#app");