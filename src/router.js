import Vue from 'vue';
import Router from 'vue-router';
import HomeView from './views/HomeView.vue';

Vue.use(Router);

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
        },
        {
            path: '/stem',
            name: 'STEM predmeti',
            component: () => import('./views/stemView.vue'),
        },
        {
            path: '/social',
            name: 'Društveni predmeti',
            component: () => import('./views/SocialView.vue'),
        },
        {
            path: '/development',
            name: 'Daljnji razvoj',
            component: () => import('./views/DevelopmentView.vue'),
        },
        {
            path: '/textbook',
            name: 'Udžbenik',
            component: () => import('./views/TextbookView.vue'),
        },
        {
            path: '*',
            name: 'pageNotFound',
            component: () => import('./views/PageNotFoundView.vue'),
        },
    ],
});

export default router;
