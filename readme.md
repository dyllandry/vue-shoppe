# Vue Shoppe

A small online shop using the [Vue framework](https://vuejs.org/guide/introduction.html#what-is-vue) and [Pinia store library](https://pinia.vuejs.org/introduction.html#why-should-i-use-pinia).

## Pages

### All Products

This is the home page. It displays every product.

### Product

Displays detailed information about a single product.

Let's you add 1 or more of the item to your cart if there are enough in stock, or add the item to your wishlist.

**Components**
* Related products
* Top Products

### Cart

Shows all the products in your cart, and all the products in your wishlist.

Lets you remove products from your cart, or move products between your cart and wishlist.

## Data

```
type Product = {
    id: string;
    name: string;
    image: string;
    description: string;
    category: string;
    popularity: number;
    price: number;
    stock: number;
}

type CartItem = {
    productId: string;
    quantity: number;
};

type Cart = CartItem[];

type WishListItem = {
    productId: string;
};

type WishList = WishListItem[];
```

### Stores

* Product
* Cart
* Wishlist

## create-vue Readme

This template should help get you started developing with Vue 3 in Vite.

### Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

### Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1) Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2) Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

### Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

### Project Setup

```sh
npm install
```

#### Compile and Hot-Reload for Development

```sh
npm run dev
```

#### Type-Check, Compile and Minify for Production

```sh
npm run build
```
