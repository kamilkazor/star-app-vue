<template>
  <div class="my-20">
    <div class="flex items-end">
      <C3poIcon class="fill-yellow-600 w-16 min-[400px]:w-20 mr-2 shrink-0" />
      <div>
        <p class="opacity-50 text-sm min-[450px]:text-base">C-3PO</p>
        <h1 class="min-[400px]:text-xl sm:text-2xl">
          WHAT TASK WOULD YOU LIKE ME TO ADD?
        </h1>
      </div>
    </div>
    <TaskApp />
  </div>
</template>

<script setup lang="ts">
import C3poIcon from "@/assets/icons/C3poIcon.vue";
import { useHead } from "@vueuse/head";
import TaskApp from "@/components/TaskApp.vue";
useHead({
  title: "Tasks - Star App",
  meta: [
    {
      name: "description",
      content: "Star Wars themed to do app",
    },
  ],
});
</script>

<style scoped></style>
