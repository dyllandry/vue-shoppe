import { ref, computed } from "vue";
import type { Ref } from "vue";
import { defineStore } from "pinia";

export const useProductStore = defineStore("product", () => {
  const products: Ref<Product[]> = ref([
    {
      id: 1,
      price: 5.99,
      name: "Baseball",
      image: "https://picsum.photos/200?random=1",
      description: "This is a very fast baseball.",
    },
    {
      id: 2,
      price: 12.99,
      name: "Basketball",
      image: "https://picsum.photos/200?random=2",
      description: "This basketball wants to be slammed dunked.",
    },
    {
      id: 3,
      price: 16.99,
      name: "Soccer ball",
      image: "https://picsum.photos/200?random=3",
      description: "This soccer ball wants to score!",
    },
    {
      id: 5,
      price: 4.99,
      name: "Tennis Ball",
      image: "https://picsum.photos/200?random=4",
      description: "Look how green it is.",
    },
    {
      id: 6,
      price: 20.99,
      name: "Bowling ball",
      image: "https://picsum.photos/200?random=5",
      description: "This is a big one.",
    },
  ]);

  const getProductById = computed(() => (id: number) => {
    const product = products.value.find((p) => p.id === id);
    if (product === undefined) {
      throw Error(`Product with id ${id} not found.`);
    }
    return product;
  });

  return {
    products,
    getProductById,
  };
});

export type Product = {
  id: number;
  price: number;
  name: string;
  image: string;
  description: string;
};
