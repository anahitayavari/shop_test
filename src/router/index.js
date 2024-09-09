import { createRouter, createWebHistory } from 'vue-router'
import index from "@/views/index/index.vue";
import Register from "@/views/auth/Register.vue";
import Login from "@/views/auth/Login.vue";
import product_single from "@/views/products/product_single.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path : "/home",
      name : "index",
      component : index
    },
    {
      path : "/register",
      name : "register",
      component : Register
    },
    {
      path : "/login",
      name : "login",
      component : Login
    },
    {
      path : "/product/:id/:title",
      name : "product_show",
      component : product_single

    }

  ]
})

export default router
