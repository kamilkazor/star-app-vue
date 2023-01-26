<template>
  <nav class="w-full flex items-center justify-between h-16 sm:text-xl">
    <RouterLink class="duration-200" to="/">Home</RouterLink>
    <RouterLink class="duration-200" to="/starships">Starships</RouterLink>
    <RouterLink class="duration-200" to="/tasks">Tasks</RouterLink>
  </nav>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<style scoped>
.router-link-active {
  color: #f59e0b;
}
</style>
