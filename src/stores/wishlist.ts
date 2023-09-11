import { defineStore } from "pinia";
import { computed, ref, type Ref } from "vue";

type WishlistItem = {
  id: number;
  productId: number;
};

export const useWishlistStore = defineStore("wishlist", () => {
  const items: Ref<WishlistItem[]> = ref([]);

  let wishlistId = 0;

  function addToWishlist(productId: number) {
    let existingItem = items.value.find((i) => i.productId === productId);
    if (!existingItem) {
      items.value.push({
        id: wishlistId,
        productId,
      });
      wishlistId++;
    }
  }

  function removeFromWishlist(id: number) {
    const itemIndex = items.value.findIndex((i) => i.id === id);
    if (itemIndex === -1) {
      throw `Can't remove wishlist item with id ${id} from wishlist, wishlist item not found.`;
    }
    items.value.splice(itemIndex, 1);
  }

  const findWishlistItemByProductId = computed(() => (productId: number) => {
    const item = items.value.find((i) => i.productId === productId);
    return item ?? null;
  });

  const numItemsInWishlist = computed(() => {
    return items.value.length;
  });

  return {
    items,
    addToWishlist,
    removeFromWishlist,
    findWishlistItemByProductId,
    numItemsInWishlist,
  };
});
