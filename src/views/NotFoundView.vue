<template>
  <div className="my-20">
    <h1 className="text-yellow-500 text-6xl">404</h1>
    <div className="card card-shape mt-5">
      <p className="mb-5">
        The galaxy is full of wonders but there is nothing here...
      </p>
      <router-link to="/" className="card-text-important">
        Go to home page
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useHead } from "@vueuse/head";
useHead({
  title: "404 - Star App",
  meta: [
    {
      name: "description",
      content: "There is nothing here",
    },
  ],
});
</script>

<style scoped></style>
