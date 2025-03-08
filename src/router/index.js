import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "DefaultLayout",
      component: () => import("../layouts/DefaultLayout.vue"),
      children: [
        {
          path: "",
          component: () => import("../views/LoginVue.vue"),
          name: "Login",
        }
      ]
    },
    {
      path: "/dashboard",
      name: "DashboardLayout",
      component: () => import("../layouts/DashboardLayout.vue"),
      children: [
        {
          path: "",
          component: () => import("../views/DashboardBlankPage.vue"),
          name: "DashboardBlankPage",
        },
        {
          path: "users",
          name: "UsersList",
          component: () => import("../views/UsersList.vue"),
        }
      ]
    }
  ],
})

export default router
