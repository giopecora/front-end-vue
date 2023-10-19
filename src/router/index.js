import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from  '../views/Login.vue'
import Dashboard from  '../views/Dashboard.vue'
import store from '../store'


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
        path: '/',
        name: 'home',
        component: HomeView,
        meta: { requiresAuth: true }

    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: Dashboard,
        meta: { requiresAuth: true }
    }
 
  ]
})


router.beforeEach(async (to, from, next) => {
    if (to.meta?.requiresAuth) {
        
        if (to.matched.some(record => record.meta.requiresAuth)) {
            
            const isAuthenticated = store.state.isAuth;

            if (!isAuthenticated) {
                next('/login');
            } else {
                next();
            }
        } else {
            next();
        }
    }
    next();
})

export default router
