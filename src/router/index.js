import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../components/HomePage.vue'
import ThreatsPage from '../components/ThreatsPage.vue'
import TipsPage from '../components/TipsPage.vue'
import AboutPage from '../components/AboutPage.vue'
import ResourcesPage from '../components/ResourcesPage.vue'
import SearchPage from '../components/SearchPage.vue'
import MaterialDetailPage from '../components/MaterialDetailPage.vue'
import ArticleDetailPage from '../components/ArticleDetailPage.vue'
import MePage from '../components/MePage.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomePage
    },
    {
        path: '/threats',
        name: 'Threats',
        component: ThreatsPage
    },
    {
        path: '/tips',
        name: 'Tips',
        component: TipsPage
    },
    {
        path: '/about',
        name: 'About',
        component: AboutPage
    },
    {
        path: '/resources',
        name: 'Resources',
        component: ResourcesPage
    },
    {
        path: '/search',
        name: 'Search',
        component: SearchPage
    },
    {
        path: '/material/:slug',
        name: 'MaterialDetail',
        component: MaterialDetailPage
    },
    {
        path: '/article/:slug',
        name: 'ArticleDetail',
        component: ArticleDetailPage
    },

    {
        path: '/me',
        name: 'TentangSaya',
        component: MePage
    }

]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { top: 0 }
        }
    }
})

export default router

