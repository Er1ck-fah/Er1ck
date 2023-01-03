import { createRouter,createWebHistory } from "vue-router";

//admin route
import homeAdminIndex from '../components/admin/home/index.vue'

//pages route
import homePageIndex from '../components/pages/home/index.vue'

//login

import Login from '../components/auth/login.vue'
//notFound route
import notFound from '../components/notFound.vue'


// route for admin dashboard
// route for any pages
// route for notFound page 404

const routes = [
    //Admin
    {
        path:'/admin/home',
        name:"Dashboard",
        component:homeAdminIndex
    },

    //Pages
    {
        path:'/',
        name:"Pages",
        component:homePageIndex
    },
    //notFound
    {
        path:'/:pathMatch(.*)*',
        name:"Page 404",
        component:notFound
    },
    //Login
    {
        path:'/login',
        name:"SignIn",
        component:Login
    },
]

const router = createRouter({
    history:createWebHistory(),
    routes,
})

export default router
