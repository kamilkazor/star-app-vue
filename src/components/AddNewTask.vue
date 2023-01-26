<template>
  <form
    autocomplete="off"
    @submit.prevent="submitHandler"
    aria-label="add new task"
    class="my-5"
  >
    <label :for="inputId" class="mb-2 block text-sm opacity-50"
      >new task:</label
    >
    <div class="flex card p-2 rounded-sm">
      <input
        class="card-text-important bg-transparent w-full focus:outline-none mr-2"
        type="text"
        name="newTask"
        :id="inputId"
        v-model="newTask"
      />
      <button
        type="submit"
        aria-label="submit"
        :disabled="!validatedTask"
        class="disabled:opacity-0 duration-200"
      >
        <R2d2Icon class="h-8 fill-blue-200/90" />
      </button>
    </div>
  </form>
</template>

<script setup lang="ts">
import { ref, watch, onBeforeMount } from "vue";
import { z } from "Zod";
import { v4 as uuidv4 } from "uuid";
import R2d2Icon from "@/assets/icons/R2d2Icon.vue";
import useTaskStore from "@/stores/useTaskStore";

const inputId = ref();
onBeforeMount(() => {
  inputId.value = uuidv4();
});

const taskStore = useTaskStore();
const taskSchema = z.string().trim().min(1);
const newTask = ref("");
const validatedTask = ref<null | string>(null);

watch(newTask, () => {
  try {
    validatedTask.value = taskSchema.parse(newTask.value);
  } catch {
    validatedTask.value = null;
  }
});

function submitHandler() {
  if (validatedTask.value) {
    taskStore.addTask({
      id: uuidv4(),
      date: new Date(),
      value: validatedTask.value,
    });
    newTask.value = "";
  }
}
</script>

<style scoped></style>
