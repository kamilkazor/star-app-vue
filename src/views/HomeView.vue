<template>
  <div
    class="flex flex-col justify-center items-center min-h-[calc(100vh-64px)]"
  >
    <header>
      <h1
        class="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center font-sans text-blue-300"
      >
        Not long time ago in your browser...
      </h1>
      <img :src="logo" alt="Star App" class="my-5 w-full max-w-screen-lg" />
    </header>
    <ul class="flex sm:text-2xl">
      <li class="p-5">
        <RouterLink to="/starships">Starships</RouterLink>
      </li>
      <li class="p-5">
        <RouterLink to="/tasks">Tasks</RouterLink>
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
import { useHead } from "@vueuse/head";
import { RouterLink } from "vue-router";
import logo from "@/assets/logo.png";

useHead({
  title: "Home - Star App",
  meta: [
    {
      name: "description",
      content: "Star Wars themed training project made with Vue",
    },
  ],
});
</script>

<style scoped></style>
