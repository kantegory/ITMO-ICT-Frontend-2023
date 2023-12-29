import { createStore } from "vuex";
import { auth } from "./auth.module";
import { task } from "./task.module";

const store = createStore({
  modules: {
    auth,
    task,
  },
});

export default store;
