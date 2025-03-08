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
          component: () => import("../views/Auth/LoginView.vue"),
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
          component: () => import("../views/Dashboard/DashboardPage.vue"),
          name: "DashboardPage",
        },
        {
          path: "users",
          name: "UsersList",
          component: () => import("../views/UsersList.vue"),
        },
        {
          path: "blank-page",
          name: "BlankPage",
          component: () => import("../views/Dashboard/BlankPage.vue"),
        },
      ],
    },
  ],
})

export default router
