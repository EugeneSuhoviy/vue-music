import NProgress from 'nprogress';
import router from "@/router";

export default (router) => {
    router.beforeEach((to, from, next) => {
        NProgress.start();
        next();
    });



    router.afterEach(NProgress.done);
}