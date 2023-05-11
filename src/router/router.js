import { createRouter, createWebHistory } from 'vue-router'
import Main from '@/pages/Main'
import PostsPage from '@/pages/PostsPage'
import Post from '@/pages/PostPage'
import About from '@/pages/About'

const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/posts',
        component: PostsPage
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/posts/:id',
        component: Post
    },
]

const router = createRouter({
    routes,
    history:createWebHistory(process.env.BASE_URL)
})

export default router