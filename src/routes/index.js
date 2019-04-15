import Home from '@/views/Home'
import About from '@/views/About'

export default [
    {
       path: '/',
       name: 'Home',
    component: Home,
    meta: {
        displayName:'Home',
        displayPageTitle: 'Projektai'
        }
    },
    {
        path: '/about',
        name: 'About',
    component: About,
    meta: {
        displayName: 'About',
        displayPageTitle: 'Apie mane'
        }
    }
]
