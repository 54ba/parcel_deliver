import { createStore } from "vuex";

const store = createStore({
    state() {
        return {}
    },
    getters: {
        isLoggedIn() {
            return true
        }
    }
})

export default store;