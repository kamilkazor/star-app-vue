<template>
  <PaginationButtons
    class="mt-20 mb-10"
    :page="page"
    :prev="!!data?.data.previous"
    :next="!!data?.data.next"
    @prevPage="goPrevPage"
    @nextPage="goNextPage"
  />
  <Transition name="newPage" appear mode="out-in">
    <div :key="page">
      <ul v-if="data" class="grid sm:grid-cols-2 gap-5">
        <StarshipCard
          v-for="(starship, index) in data.data.results"
          :key="index"
          :starship="starship"
        />
      </ul>
      <ul v-if="isLoading" class="grid sm:grid-cols-2 gap-5">
        <StarshipCardSceleton v-for="item in 10" :key="item" />
      </ul>
      <div v-if="isError" class="card card-shape">
        <h2 class="card-text-important text-2xl">Something is not right...</h2>
        <p class="mb-5 card-text-important">
          Please make sure that the address is correct and try again later.
        </p>
        <p class="text-sm">{{ error }}</p>
      </div>
    </div>
  </Transition>
  <PaginationButtons
    class="mt-10 mb-10"
    :page="page"
    :prev="!!data?.data.previous"
    :next="!!data?.data.next"
    @prevPage="goPrevPage"
    @nextPage="goNextPage"
  />
</template>

<script setup lang="ts">
import StarshipCard from "@/components/StarshipCard.vue";
import PaginationButtons from "@/components/PaginationButtons.vue";
import useStarships from "@/queries/useStarships";
import StarshipCardSceleton from "@/components/StarshipCardSceleton.vue";
import { useRoute, useRouter } from "vue-router";
import { ref, watch } from "vue";

const route = useRoute();
const router = useRouter();
const page = ref(route.query.page ? Number(route.query.page) : 1);

watch(route, () => {
  page.value = route.query.page ? Number(route.query.page) : 1;
});
function goPrevPage() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  router.push({ query: { page: page.value - 1 } });
}
function goNextPage() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  router.push({ query: { page: page.value + 1 } });
}
const { data, isLoading, isError, error } = useStarships(page);
</script>

<style scoped>
.newPage-enter-from {
  opacity: 0;
  transform: translateY(100px);
}
.newPage-leave-to {
  opacity: 0;
  transform: translateY(100px);
}
.newPage-enter-active,
.newPage-leave-active {
  transition: all 500ms;
}
</style>
