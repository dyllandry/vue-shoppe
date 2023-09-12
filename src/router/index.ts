import { createRouter, createWebHistory } from "vue-router";
import ProductsView from "../views/ProductsView.vue";
import CartView from "../views/CartView.vue";
import ProductDetailView from "../views/ProductDetailView.vue";
import WishlistView from "../views/WishlistView.vue";

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
      path: "/wishlist/",
      name: "wishlist",
      component: WishlistView,
    },
    {
      path: "/:pathMatch(.*)*",
      redirect: {
        name: "products",
      },
    },
  ],
});

export default router;
