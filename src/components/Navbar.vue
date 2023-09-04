<script setup lang="ts">
import { RouterLink } from 'vue-router'

</script>

<template>
    <div class="flex items-end mt-2 mb-4">
        <div class="text-xl grow-[2]">
            <RouterLink :to="{ name: 'home' }">Vue Shoppe</RouterLink>
        </div>
        <div class="grow">
            <RouterLink :to="{ name: 'home' }">Products</RouterLink>
        </div>
        <div class="grow">
            <RouterLink :to="{ name: 'home' }">Cart</RouterLink>
        </div>
        <div class="grow">
            <RouterLink :to="{ name: 'home' }">Wishlist</RouterLink>
        </div>
    </div>
</template>