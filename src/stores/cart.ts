import { defineStore } from "pinia";
import { ref, type Ref } from "vue";

export const useCartStore = defineStore('cart', () => {
    const items: Ref<CartItem[]> = ref([]);
    
    let itemId = 0;

    /** If the item already exists in the cart, the item's quantity will be increased by 1. */
    function addToCart(productId: number, quantity: number = 1) {
        const existingCartItem = items.value.find(i => i.productId === productId);
        if (existingCartItem === undefined) {
            const newCartItem: CartItem = {
                id: itemId,
                productId,
                quantity
            }
            items.value.push(newCartItem);
            itemId++;
        } else {
            changeQuantity(existingCartItem.id, existingCartItem.quantity + 1);
        }
    }

    function removeFromCart(id: number) {
        const cartItemIndex = items.value.findIndex(i => i.id === id);
        if (cartItemIndex === -1) {
            throw `Can't remove cart item with id ${id} from cart, cart item not found.`;
        }
        items.value.splice(cartItemIndex);
    }

    function changeQuantity(id: number, quantity: number) {
        const cartItem = items.value.find(i => i.id === id);
        if (cartItem === undefined) {
            throw `Cannot change quantity of cart item with id ${id}, cart item not found.`
        }
        cartItem.quantity = quantity;
    }

    return { items, addToCart, removeFromCart, changeQuantity };
});

export type CartItem = {
    id: number,
    productId: number,
    quantity: number,
};