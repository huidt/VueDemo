import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// 下面是自己加的
import Jichu from '@/views/Jichu.vue'
import Zhongji from '@/views/Zhongji.vue'
// import Links from '@/views/Links.vue'
// import { component } from 'vue/types/umd'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
            title: '主页'
        }
    },
    {
        path: '/Jichu',
        name: 'Jichu',
        component: Jichu,
        meta: {
            title: '基础'
        }
    },
    {
        path: '/Zhongji',
        name: 'Zhongji',//现在vue3可以省略name
        component: Zhongji,
        meta: {
            title: '中级'
        }
    },
    {
        path: '/links',
        name: 'Links',
        // component: Links
        // 而且现在v3支持下面这么写，就不用在开头import了
        component: () => import(/*webpackChunName:"links"*/'../views/Links.vue'),
        meta: {
            title: '链接'
        }
    },
    {
        path: '*',
        redirect: '/index'
    },
    {
        path: '/login',
        name: 'Login',
        // component: Links
        // 而且现在v3支持下面这么写，就不用在开头import了
        component: () => import(/*webpackChunName:"login"*/'../views/Login.vue'),
        meta: {
            title: '登录'
        }
    }
]
const RouterConfig = {
    //使用 HTML5 的 History 路由模式
    mode: 'history',
    routes: routes
};

// const router = new VueRouter({
//     routes
// })
const router = new VueRouter(RouterConfig);
router.beforeEach((to, from, next) => {
    // to为当前导航（即将要进入的） 
    // from为当前导航（即将要离开的）
    // 调用next，才会进入下一步

    // 切换SPA title
    window.document.title = to.meta.title;

    // 跳转到长页面自动回到顶端
    // window.scrollTo(0, 0);

    if (window.localStorage.getItem('token')) {
        console.log("token  " + JSON.parse(window.localStorage.getItem('token')).value);
        next();
    } else {
        console.log("请先登录");
    }
})

export default router