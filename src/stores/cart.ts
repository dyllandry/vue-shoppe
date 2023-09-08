import { defineStore } from "pinia";
import { computed, ref, type Ref } from "vue";

export const useCartStore = defineStore("cart", () => {
  const items: Ref<CartItem[]> = ref([]);

  let itemId = 0;

  const getCartItemById = computed(() => (id: number) => {
    const cartItem = items.value.find((item) => item.id === id);
    if (cartItem === undefined) {
      throw Error(`Cart item with id ${id} not found.`);
    }
    return cartItem;
  });

  /** If the item already exists in the cart, the item's quantity will be increased by 1. */
  function addToCart(productId: number, quantity: number = 1) {
    const existingCartItem = items.value.find((i) => i.productId === productId);
    if (existingCartItem === undefined) {
      const newCartItem: CartItem = {
        id: itemId,
        productId,
        quantity,
      };
      items.value.push(newCartItem);
      itemId++;
    } else {
      changeQuantity(existingCartItem.id, existingCartItem.quantity + 1);
    }
  }

  function removeFromCart(id: number) {
    const cartItemIndex = items.value.findIndex((i) => i.id === id);
    if (cartItemIndex === -1) {
      throw `Can't remove cart item with id ${id} from cart, cart item not found.`;
    }
    items.value.splice(cartItemIndex, 1);
  }

  function changeQuantity(id: number, quantity: number) {
    const cartItem = items.value.find((i) => i.id === id);
    if (cartItem === undefined) {
      throw `Cannot change quantity of cart item with id ${id}, cart item not found.`;
    }
    cartItem.quantity = quantity;
  }

  const quantityInCart = computed(() => {
    return items.value.reduce((acc, item) => acc + item.quantity, 0);
  });

  return {
    items,
    getCartItemById,
    addToCart,
    removeFromCart,
    changeQuantity,
    quantityInCart,
  };
});

export type CartItem = {
  id: number;
  productId: number;
  quantity: number;
};
