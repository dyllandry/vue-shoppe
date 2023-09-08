<script setup lang="ts">
import { useCartStore } from "@/stores/cart";
import { storeToRefs } from "pinia";
import CartListItem from "./CartListItem.vue";

const cartStore = useCartStore();
const { items } = storeToRefs(cartStore);
</script>

<template>
  <div class="flex flex-col gap-y-12">
    <CartListItem v-for="item in items" :key="item.id" :id="item.id" />
  </div>
</template>
