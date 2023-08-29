<script setup lang="ts">
import { useProductStore } from '@/stores/product';

const { products } = useProductStore();
</script>

<template>
    <div :style="{ display: 'flex', justifyContent: 'space-between' }">
        <div v-for="product in products" :key="product.id">
            <img :src="product.image" :style="{
                display: 'block',
                width: '200px',
                height: '200px'
            }
                ">
            <div>${{ product.price }}</div>
            <div>{{ product.name }}</div>
            <button :style="{ display: 'block' }">Add to Cart</button>
            <button :style="{ display: 'block' }">Add to Wishlist</button>
        </div>
    </div>
</template>