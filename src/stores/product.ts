import { ref } from 'vue';
import type { Ref } from 'vue';
import { defineStore } from 'pinia';

export const useProductStore = defineStore('product', () => {
	const products: Ref<Product[]> = ref([
		{
			id: 1,
			price: 5.99,
			name: 'Baseball',
			image: 'https://picsum.photos/200',
			description: 'This is a very fast baseball.'
		},
		{
			id: 2,
			price: 12.99,
			name: 'Basketball',
			image: 'https://picsum.photos/200',
			description: "This basketball wants to be slammed dunked."
		},
		{
			id: 3,
			price: 16.99,
			name: 'Soccer ball',
			image: 'https://picsum.photos/200',
			description: "This soccer ball wants to score!"
		}
	]);

	return {
		products
	}
});

export type Product = {
	id: number,
	price: number,
	name: string,
	image: string,
	description: string
}
