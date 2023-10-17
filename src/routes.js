import {createRouter, createWebHashHistory} from 'vue-router'
import Home from './components/Home.vue'
import ItemDetails from './components/ItemDetails.vue'

// routes
const routes = [
    {
        path: '/',
        component: Home,
        name: 'home'
    },
    {
        path: '/details/:id',
        component: ItemDetails,
        name: 'details'
    },
    //{
    //    path: '/resources/:name?',
    //    component: ItemDetails,
    //    name: 'resources'
    //}
]

// Router
export default createRouter({
    history: createWebHashHistory(),
    routes: routes
})