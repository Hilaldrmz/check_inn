import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

/* import the fontawesome */
import { library } from '@fortawesome/fontawesome-svg-core'
import * as solidIcons from '@fortawesome/free-solid-svg-icons';
import * as regularIcons from '@fortawesome/free-regular-svg-icons';
import * as brandIcons from '@fortawesome/free-brands-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

const filterIcons = (icons) =>
    Object.keys(icons)
        .filter((key) => key.startsWith("fa")) // Just add the icons
        .map((key) => icons[key]);

library.add(
    ...filterIcons(solidIcons),
    ...filterIcons(regularIcons),
    ...filterIcons(brandIcons)
);

const app = createApp(App);

app.component('font-awesome-icon', FontAwesomeIcon)
app.use(createPinia());
app.use(router);

app.mount("#app");
