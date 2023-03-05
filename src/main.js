import { createApp } from "vue";
import { createStore } from "vuex";
import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

const store = createStore({
  state() {
    return {
      user: null,
      requirements: []
    }
  },
  mutations: {
    updateUser(state, newUser) {
      state.user = newUser;
    }
  }
})

const app = createApp(App);

app.use(router);
app.use(store);

app.mount("#app");
