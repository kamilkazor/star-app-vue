import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { render, screen, within } from "@testing-library/vue";
import { createTestingPinia } from "@pinia/testing";

import TaskApp from "@/components/TaskApp.vue";

describe("TaskApp", async () => {
  it("renders properly", () => {
    render(TaskApp, {
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

    expect(screen.getByRole("textbox"));
  });
  it("user can add multiple tasks", async () => {
    const user = userEvent.setup();
    render(TaskApp, {
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

    expect(screen.queryByText("test 1")).not.toBeInTheDocument();
    expect(screen.queryByText("test 2")).not.toBeInTheDocument();
    expect(screen.queryByText("test 3")).not.toBeInTheDocument();
    const submitBtn = screen.getByLabelText("submit");
    const input = screen.getByRole("textbox");
    await user.type(input, "test 1");
    await user.click(submitBtn);
    await user.type(input, "test 2");
    await user.click(submitBtn);
    await user.type(input, "test 3");
    await user.click(submitBtn);
    expect(screen.getByText("test 1"));
    expect(screen.getByText("test 2"));
    expect(screen.getByText("test 3"));
  });
  it("user can remove task by clicking delete button", async () => {
    const user = userEvent.setup();
    render(TaskApp, {
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

    expect(screen.queryByText("test 1")).not.toBeInTheDocument();
    const submitBtn = screen.getByLabelText("submit");
    const input = screen.getByRole("textbox");
    await user.type(input, "test 1");
    await user.click(submitBtn);
    expect(screen.getByText("test 1"));
    const deleteBtn = within(screen.getAllByRole("listitem")[0]).getByRole(
      "button"
    );
    await user.click(deleteBtn);
    expect(screen.queryByText("test 1")).not.toBeInTheDocument();
  });
  it("user can sort tasks by newest and oldest", async () => {
    const user = userEvent.setup();
    render(TaskApp, {
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
    const submitBtn = screen.getByLabelText("submit");
    const input = screen.getByRole("textbox");
    await user.type(input, "test 1");
    await user.click(submitBtn);
    await user.type(input, "test 2");
    await user.click(submitBtn);
    await user.type(input, "test 3");
    await user.click(submitBtn);
    const newestBtn = screen.getByText(/newest/i);
    const oldestBtn = screen.getByText(/oldest/i);
    await user.click(newestBtn);
    const tasksByNewest = screen.getAllByRole("listitem");
    expect(within(tasksByNewest[0]).getByText("test 3"));
    await user.click(oldestBtn);
    const tasksByOldest = screen.getAllByRole("listitem");
    expect(within(tasksByOldest[tasksByOldest.length - 1]).getByText("test 3"));
  });
  it("component shows correct information about number of tasks", async () => {
    const user = userEvent.setup();
    render(TaskApp, {
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
    expect(screen.getByText(/tasks to do: 0/i));
    const submitBtn = screen.getByLabelText("submit");
    const input = screen.getByRole("textbox");
    await user.type(input, "test 1");
    await user.click(submitBtn);
    await user.type(input, "test 2");
    await user.click(submitBtn);
    await user.type(input, "test 3");
    await user.click(submitBtn);
    expect(screen.getByText(/tasks to do: 3/i));
  });
});
