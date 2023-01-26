import { describe, expect, it } from "vitest";
import { v4 as uuidv4 } from "uuid";
import { setActivePinia, createPinia } from "pinia";
import useTaskStore from "../useTaskStore";

describe("useTaskStore", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  const testTaskFirst = {
    date: new Date("2023-01-25T15:00"),
    id: uuidv4(),
    value: "Test value",
  };
  const testTaskSecond = {
    date: new Date("2023-01-26T12:00"),
    id: uuidv4(),
    value: "Test value",
  };
  const testTaskThird = {
    date: new Date("2023-01-26T18:00"),
    id: uuidv4(),
    value: "Test value",
  };

  it("adds new task", () => {
    const taskStore = useTaskStore();
    taskStore.tasks = [];

    taskStore.addTask(testTaskFirst);
    expect(taskStore.tasks[0]).toEqual(testTaskFirst);
  });
  it("deletes task by id", () => {
    const taskStore = useTaskStore();
    taskStore.tasks = [];

    taskStore.addTask(testTaskFirst);
    taskStore.addTask(testTaskSecond);
    taskStore.addTask(testTaskThird);

    expect(
      taskStore.tasks.filter((task) => task.id === testTaskSecond.id).length
    ).toBe(1);
    taskStore.deleteTask(testTaskSecond.id);
    expect(
      taskStore.tasks.filter((task) => task.id === testTaskSecond.id).length
    ).toBe(0);
  });
  it("returns sorted tasks by newest", () => {
    const taskStore = useTaskStore();
    taskStore.tasks = [];

    taskStore.addTask(testTaskSecond);
    taskStore.addTask(testTaskThird);
    taskStore.addTask(testTaskFirst);

    const fromNewest = taskStore.fromNewest();
    expect(fromNewest[0]).toEqual(testTaskThird);
    expect(fromNewest[1]).toEqual(testTaskSecond);
    expect(fromNewest[2]).toEqual(testTaskFirst);
  });
  it("returns sorted tasks by oldest", () => {
    const taskStore = useTaskStore();
    taskStore.tasks = [];

    taskStore.addTask(testTaskSecond);
    taskStore.addTask(testTaskThird);
    taskStore.addTask(testTaskFirst);

    const fromOldest = taskStore.fromOldest();
    expect(fromOldest[0]).toEqual(testTaskFirst);
    expect(fromOldest[1]).toEqual(testTaskSecond);
    expect(fromOldest[2]).toEqual(testTaskThird);
  });
});
