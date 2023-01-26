<template>
  <div>
    <h2 class="text-2xl text-yellow-500">
      TASKS TO DO: {{ taskStore.tasks.length }}
    </h2>
    <div class="flex items-end">
      <p class="mr-5 opacity-50 text-sm">sort by:</p>
      <button
        @click="sortBy = 'NEWEST'"
        class="mr-5 duration-200"
        :style="{ opacity: sortBy === 'NEWEST' ? 1 : 0.5 }"
      >
        NEWEST
      </button>
      <button
        @click="sortBy = 'OLDEST'"
        class="mr-5 duration-200"
        :style="{ opacity: sortBy === 'OLDEST' ? 1 : 0.5 }"
      >
        OLDEST
      </button>
    </div>
    <TransitionGroup
      tag="ul"
      name="taskList"
      appear
      class="mt-5 space-y-5 relative"
    >
      <TaskItem v-for="task in sortedTasks" :key="task.id" :task="task" />
      <li v-if="!sortedTasks.length" class="card card-shape w-full">
        <h3 class="card-text-important">
          Congratulations, you have nothing to do!
        </h3>
        <p class="text-sm">Take some rest.</p>
      </li>
    </TransitionGroup>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import TaskItem from "@/components/TaskItem.vue";
import useTaskStore from "@/stores/useTaskStore";
const sortBy = ref<"NEWEST" | "OLDEST">("NEWEST");

const taskStore = useTaskStore();
let sortedTasks = computed(() => {
  switch (sortBy.value) {
    case "NEWEST":
      return taskStore.fromNewest();

    case "OLDEST":
      return taskStore.fromOldest();

    default:
      return taskStore.tasks;
  }
});
</script>

<style scoped>
.taskList-enter-from,
.taskList-leave-to {
  opacity: 0;
  transform: scale(0.5);
}
.taskList-enter-active {
  transition: all 500ms;
}
.taskList-leave-active {
  transition: all 500ms;
  position: absolute;
}
.taskList-move {
  transition: all 500ms;
}
</style>
