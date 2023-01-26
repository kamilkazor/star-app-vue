import { defineStore } from "pinia";
import { ref } from "vue";
import { v4 as uuidv4 } from "uuid";

export interface Task {
  id: string;
  date: Date;
  value: string;
}

const initialTasks: Task[] = [
  {
    id: uuidv4(),
    date: new Date("Tue Jan 24 2023 11:17:25 GMT+0100"),
    value: "Go to sleep",
  },
  {
    id: uuidv4(),
    date: new Date("Tue Jan 23 2023 15:24:26 GMT+0100"),
    value: "Visit master Yoda",
  },
  {
    id: uuidv4(),
    date: new Date("Tue Jan 22 2023 09:11:30 GMT+0100"),
    value: "Repair the starship",
  },
];

const useTaskStore = defineStore("taskStore", () => {
  const tasks = ref<Task[]>(initialTasks);

  function addTask(task: Task) {
    tasks.value.push(task);
  }
  function deleteTask(id: Task["id"]) {
    tasks.value = tasks.value.filter((task) => task.id !== id);
  }
  function fromNewest() {
    return [...tasks.value].sort((a, b) => b.date.getTime() - a.date.getTime());
  }
  function fromOldest() {
    return [...tasks.value].sort((a, b) => a.date.getTime() - b.date.getTime());
  }
  return { tasks, addTask, deleteTask, fromNewest, fromOldest };
});

export default useTaskStore;
