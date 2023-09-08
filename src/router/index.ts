import { createRouter, createWebHistory } from "vue-router";
import ProductsView from "../views/ProductsView.vue";
import CartView from "../views/CartView.vue";
import ProductDetailView from "../views/ProductDetailView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/products",
      name: "products",
      component: ProductsView,
    },
    {
      path: "/cart",
      name: "cart",
      component: CartView,
    },
    {
      path: "/product/:id",
      name: "product",
      component: ProductDetailView,
    },
    {
      path: "/:pathMatch(.*)*",
      redirect: {
        name: "products",
      },
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ],
});

export default router;
