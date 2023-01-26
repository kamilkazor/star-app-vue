import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/vue";
import type { Task } from "@/stores/useTaskStore";
import { createTestingPinia } from "@pinia/testing";

import TaskItem from "@/components/TaskItem.vue";

describe("TaskItem", async () => {
  const task: Task = {
    id: "testId",
    date: new Date(),
    value: "testing value",
  };

  it("renders properly", () => {
    render(TaskItem, {
      props: {
        task: task,
      },
      global: {
        plugins: [createTestingPinia()],
      },
    });
    expect(screen.getByRole("button"));
    expect(screen.getByText(task.value));
  });
});
