import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import RegisterView from "../views/RegisterView.vue";
import LoginView from "../views/LoginView.vue";
import HotelView from "../views/HotelView.vue";
import HotelsView from "../views/HotelsView.vue";
// import NotFoundView from "../views/404View.vue";



const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return { top: 0 };
        }
    },
    routes: [
        {
            path: "/",
            name: 'home',
            component: HomeView
        },
        {
            path: "/home",
            redirect: "/"
        },
        {
            path: "/hotels",
            name: 'hotels',
            component: HotelsView
        },
        {
            path: '/hotel/:id',
            name: 'hotel',
            component: HotelView,
        },
        {
            path: '/register',
            name: 'register',
            component: RegisterView,
        },
        {
            path: '/login',
            name: 'login',
            component: LoginView,
        },
        // {
        //     path: "/:catchall(.*)*",
        //     name: 'Not Found',
        //     component: NotFoundView
        // },
    ]
});

export default router;