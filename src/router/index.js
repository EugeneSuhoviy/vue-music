import { createRouter, createWebHistory } from 'vue-router';
// import Home from '@/views/Home.vue';
// import About from '@/views/About.vue';
import Manage from '@/views/Manage.vue';
import Song from "@/views/Song.vue";
import useUserStore from '@/stores/user';


// Vite chunks
const Home = () => import("@/views/Home.vue")
const About = () => import("@/views/About.vue")

const routes = [
    {
        name: 'home', // alias for templates
        path: '/',
        component: Home
    },
    {
        name: 'about',
        path: '/about',
        component: About
    },
    {
        name: 'manage',
        // alias: '/manage',
        path: '/manage-music',
        component: Manage,
        beforeEnter: (to, from, next) => {
            next();
        },
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/manage',
        redirect: { name: 'manage' }
    },
    {
        path: '/:catchAll(.*)*',
        redirect: { name: 'home' }
    },
    {
        name: 'song',
        path: '/song/:id',
        component: Song
    }
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
    linkExactActiveClass: 'text-yellow-500'
});

router.beforeEach((to, from, next) => {
    // debugger;
    if (!to.meta.requiresAuth) {
        next();
        return;
    }

    const store = useUserStore();

    if (store.userLoggedIn) {
        next();
    } else {
        next({ name: 'home' });
    }
}); // for routers guard

export default router;
