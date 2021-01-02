/*
 * @Descripttion:
 * @version:
 * @Date: 2020-04-08 12:00:06
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);
const router = new VueRouter({
    routes:[
        {
            path:'/',
            redirect: 'home'
        },
        //登录
        {
            path: '/login',
            name: 'login',
            component: () => import('../views/login/login'),
        },
        //首页
        {
            path: '/home',
            name: 'home',
            component: () => import('../views/home/home'),
        },
        //详情
        {
            path: '/details',
            name: 'details',
            component: () => import('../views/details/details'),
        },
        //计算机
        {
            path: '/calculator',
            name: 'Calculator',
            component: () => import('../views/calculator/calculator'),
        },
        //我的
        {
            path: '/my',
            name: 'my',
            component: () => import('../views/my/my'),
        },
        //---------------------------------------------------    4 0 4       ----------------------------------------------
        {
            path: "/404",
            name: "Error",
            component: () => import('../views/Error/404.vue'),
        },
        {
            path: "*", // 此处需特别注意置于最底部
            redirect: "/404"
        }
    ]
});

router.beforeEach((to,from,next)=>{
    // to 将要进入的路由
    // from 代表从那个路径跳转而来
    // next 放行
    if(to.path==='/login')return next();
    if(to.path==='/my'){
        //获取token
        const token =window.sessionStorage.getItem('token');
        if(!token) return next('/login');
    }
    next()
});
export default router
