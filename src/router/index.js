import { createRouter, createWebHistory } from 'vue-router'
import LoginView from "../views/LoginView.vue"
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    {
      path:"/login",
      name:"LoginView",
      component:LoginView
    }
  ]
})

export default router