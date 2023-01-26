<template>
  <div class="flex justify-center items-center">
    <button
      aria-label="previous page"
      :disabled="!prev"
      @click="$emit('prevPage')"
      class="mr-5 fill-yellow-500 disabled:fill-white/50 duration-200"
    >
      <XwingIcon class="h-8 transform -rotate-90" />
    </button>
    <p aria-label="current page" class="text-lg">page: {{ page }}</p>
    <button
      aria-label="next page"
      :disabled="!next"
      @click="$emit('nextPage')"
      class="ml-5 fill-yellow-500 disabled:fill-white/50 duration-200"
    >
      <XwingIcon class="h-8 transform rotate-90" />
    </button>
  </div>
</template>

<script setup lang="ts">
import XwingIcon from "@/assets/icons/XwingIcon.vue";
defineProps<{ page: number; prev: boolean; next: boolean }>();
</script>

<style scoped></style>
