import { render, screen } from "@testing-library/vue";
import { describe, it } from "vitest";
import { createTestingPinia } from "@pinia/testing";

import TasksView from "@/views/TasksView.vue";

describe("TasksView", () => {
  it("renders properly", () => {
    render(TasksView, {
      global: {
        plugins: [
          createTestingPinia({
            stubActions: false,
            initialState: {
              taskStore: {
                tasks: [],
              },
            },
          }),
        ],
      },
    });

    expect(screen.getByRole("heading", { level: 1 }));
  });
});
