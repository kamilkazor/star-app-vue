<template>
  <li class="card card-shape flex w-full">
    <div class="mr-5">
      <p class="text-sm [word-spacing:0.5rem]">
        {{
          task.date.toLocaleString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
            hour: "numeric",
            minute: "2-digit",
          })
        }}
      </p>
      <h3 class="card-text-important [word-break:break-word]">
        {{ task.value }}
      </h3>
    </div>
    <button
      aria-label="delete task"
      @click="taskStore.deleteTask(task.id)"
      class="ml-auto fill-blue-300/50 duration-200 flex items-center"
    >
      <DeleteIcon class="h-10" />
    </button>
  </li>
</template>

<script setup lang="ts">
import DeleteIcon from "@/assets/icons/DeleteIcon.vue";
import useTaskStore from "@/stores/useTaskStore";
import type { Task } from "@/stores/useTaskStore";
defineProps<{ task: Task }>();

const taskStore = useTaskStore();
</script>

<style scoped></style>
