import { ExceedMaxCartItemQuantity } from "@/errors/exceed-max-cart-item-quantity";
import { useCartStore } from "../cart";
import { useWishlistStore } from "../wishlist";

export function moveFromCartToWishlist(
  productId: number,
  cartStore: ReturnType<typeof useCartStore>,
  wishlistStore: ReturnType<typeof useWishlistStore>
) {
  const { findCartItemByProductId, removeFromCart } = cartStore;
  const cartItem = findCartItemByProductId(productId);
  if (cartItem == null) {
    throw `Cannot move cart item with product id ${productId} to wishlist, product does not exist in cart.`;
  }
  removeFromCart(cartItem.id);

  const { addToWishlist } = wishlistStore;
  addToWishlist(productId);
}

export function moveFromWishlistToCart(
  productId: number,
  cartStore: ReturnType<typeof useCartStore>,
  wishlistStore: ReturnType<typeof useWishlistStore>
) {
  const { findWishlistItemByProductId, removeFromWishlist } = wishlistStore;
  const wishlistItem = findWishlistItemByProductId(productId);
  if (wishlistItem == null) {
    throw `Cannot move wishlist item with product id ${productId} to cart, product does not exist in wishlist.`;
  }

  removeFromWishlist(wishlistItem.id);

  const { addToCart } = cartStore;
  try {
    addToCart(productId);
  } catch (error) {
    if (error instanceof ExceedMaxCartItemQuantity) {
      // TODO: show toaster message
    } else {
      throw error;
    }
  }
}
