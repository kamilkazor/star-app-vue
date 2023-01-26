<template>
  <div class="mt-20">
    <header class="flex justify-center items-end">
      <MillenniumIcon
        class="fill-blue-300 w-16 min-[400px]:w-20 shrink-0 mr-2"
      />
      <div>
        <p class="opacity-50 text-sm min-[450px]:text-base">
          MILLENNIUM FALCON'S
        </p>
        <h1
          class="text-xl min-[450px]:text-2xl min-[550px]:text-3xl sm:text-4xl"
        >
          STARSHIP DATABASE
        </h1>
      </div>
    </header>
    <BrowseStarships />
  </div>
</template>

<script setup lang="ts">
import MillenniumIcon from "@/assets/icons/MillenniumIcon.vue";
import BrowseStarships from "@/components/BrowseStarships.vue";
import { useHead } from "@vueuse/head";

useHead({
  title: "Starships - Star App",
  meta: [
    {
      name: "description",
      content: "Star Wars starship database provided by SWAPI",
    },
  ],
});
</script>

<style scoped></style>
