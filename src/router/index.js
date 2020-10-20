import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// 下面是自己加的
import Jichu from '@/views/Jichu.vue'
import Zhongji from '@/views/Zhongji.vue'
import Links from '@/views/Links.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/Jichu',
        name: 'Jichu',
        component: Jichu
    },
    {
        path: '/Zhongji',
        name: 'Zhongji',
        component: Zhongji
    },
    {
        path: '/links',
        name: 'Links',
        component: Links
    },
]
const router = new VueRouter({
    routes
})
export default router