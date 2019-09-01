import Vue from 'vue'
import VueRouter from 'vue-router'

// import Home from './views/Home.vue'
const Home = () => import('./views/Home.vue' /* webpackChunkName: 'home' */)
//import About from './views/About.vue'
const About = () => import('./views/About.vue' /* webpackChunkName: 'about' */)
//import Contact from './views/Contact.vue'
const Contact = () => import('./views/Contact.vue' /* webpackChunkName: 'contact' */)
const User = () => import('./views/User.vue' /* webpackChunkName: 'user' */)
const UserProfile = () => import('./views/UserProfile.vue' /* webpackChunkName: 'user-profile' */)
const Form = () => import('./views/Form.vue' /* webpackChunkName: 'form' */)
const Chart = () => import('./views/Chart.vue' /* webpackChunkName: 'chart' */)
const I18n = () => import('./views/I18n' /* webpackChunkName: 'i18n' */)
const Nested = () => import('./views/Nested.vue' /* webpackChunkName: 'nested' */)
const Post = () => import('./views/Post.vue' /* webpackChunkName: 'post' */)
const Search = () => import('./views/Search.vue' /* webpackChunkName: 'search' */)
const Page = () => import('./views/Pagination.vue' /* webpackChunkName: 'page' */)

Vue.use(VueRouter)

const routes = [
    {path: '/', component:Home},
    {path: '/about', component:About},
    {path: '/contact', component:Contact},
    {path: '/user', component:User},
    {path: '/form', component:Form},
    {path: '/chart', component:Chart},
    { path: '/i18n', component: I18n },
    {path: '/user/:id', component:UserProfile},
    {path: '/nested', component:Nested},
    {path: '/post', component:Post},
    {path: '/search', component:Search},
    {path: '/pagination', component:Page},
    {path: '*', component:Home}
]

const router = new VueRouter(
    {
        routes:routes,
        mode: 'history'
    }
)

export default router