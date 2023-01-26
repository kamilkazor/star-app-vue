import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/vue";
import { createTestingPinia } from "@pinia/testing";

import TaskList from "@/components/TaskList.vue";

describe("TaskList", async () => {
  it("renders properly", () => {
    render(TaskList, {
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
    expect(screen.getByText(/Tasks to do/i));
    expect(screen.getByText(/newest/i));
    expect(screen.getByText(/oldest/i));
  });
});
