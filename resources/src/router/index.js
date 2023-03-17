import { createRouter, createWebHistory } from "vue-router";

import BoardsHome from "../views/Boards/Home.vue";
import BoardHome from "../views/Board/Home.vue";
import SenderHome from "../views/Board/SenderHome.vue";



const routes = [
    {
        path: "/", component: BoardsHome,
        meta: {
            backgroundClass: "bg-gray-100"
        }
    },
    {
        path: "/board/1", component: BoardHome,
        meta: {}
    },

    {
        path: "/board/2", component: SenderHome,
        meta: {}
    },

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;