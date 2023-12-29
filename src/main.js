import { createApp } from "vue";
import App from "./App.vue";
const app = createApp(App);

//// Modules
// FontAwesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import {faClock, faStopwatch} from "@fortawesome/free-solid-svg-icons";
library.add(faClock, faStopwatch);

app.component("font-awesome-icon", FontAwesomeIcon);
// Custom Imports
// import name from "./components/#.vue"; | app.component("TAG", COMPONENT);
import countdownComponent from "./components/countdown.vue"; app.component("countdown", countdownComponent);
import counterComponent from "./components/counter.vue"; app.component("counter", counterComponent);
import stopwatchComponent from "./components/stopwatch.vue"; app.component("stopwatch", stopwatchComponent);

//// Mount
app.mount("#app");