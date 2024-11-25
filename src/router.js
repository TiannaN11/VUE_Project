import {createRouter, createWebHistory} from 'vue-router'
import Home from "./components/Home.vue";
import AllBooks from "./components/AllBooks.vue";
import Community from "./components/community.vue";
import BookDetails from "./components/BookDetails.vue";
import Write from "./components/Write.vue";
import Profile from "./components/Profile.vue";


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/home',
            name: 'Home',
            component: Home,
        },

        {
            path: '/Community',
            name: 'Community',
            component: Community
        },
        {
            path: '/books',
            name: 'AllBooks',
            children: [
                {
                    path: '',
                    component: AllBooks,
                    name: 'AllBooks',
                },
                {
                    path: 'details/:id',
                    name: 'BookDetails',
                    component: BookDetails,
                }
            ]
        },

        {
            path: '/write',
            name: 'Write',
            component: Write
        },

        {
            path: '/Profile',
            name: 'Profile',
            component: Profile
        }
    ]
})

export default router