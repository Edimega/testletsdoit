import { createRouter, createWebHistory } from 'vue-router'
import inicioComponent from '../components/inicioComponent.vue'
import loginComponent from '../components/loginComponent.vue';
import registroComponent from '../components/registroComponent.vue';
import error404Component from '../components/error404Component.vue';

const routes = [
    
    { path: '/', name: 'inicio', component: inicioComponent },
    { path: '/login', name: 'Login', component: loginComponent },
    { path: '/registro', name: 'Registro', component: registroComponent },
    { path: '/:id', name: 'Error 404', component: error404Component }

    
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router