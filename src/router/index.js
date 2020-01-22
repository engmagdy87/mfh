import VueRouter from 'vue-router';
import Landing from '@/containers/Landing.vue';

export const routes = [
    { path: '/', name: 'landing', component: Landing },
    { path: '*', component: Landing }
];

const router = new VueRouter({ routes, mode: 'history' });

export default router;
