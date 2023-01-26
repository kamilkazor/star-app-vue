import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/vue";
import { createTestingPinia } from "@pinia/testing";

import AddNewTask from "@/components/AddNewTask.vue";

describe("AddNewTask", async () => {
  it("renders properly", () => {
    render(AddNewTask, {
      global: {
        plugins: [createTestingPinia()],
      },
    });

    expect(screen.getByRole("textbox"));
    expect(screen.getByRole("button"));
  });
  it("user can type inside input", async () => {
    const user = userEvent.setup();
    render(AddNewTask, {
      global: {
        plugins: [createTestingPinia()],
      },
    });

    const input = screen.getByRole("textbox");
    await user.type(input, "testing");
    expect(input).toHaveValue("testing");
  });
  it("user can only submit valid text", async () => {
    const user = userEvent.setup();
    const wrapper = render(AddNewTask, {
      global: {
        plugins: [createTestingPinia()],
      },
    });

    const submitBtn = screen.getByRole("button");
    const input = screen.getByRole("textbox");
    expect(submitBtn).toBeDisabled();
    await user.type(input, "    ");
    expect(submitBtn).toBeDisabled();
    await user.type(input, "testing");
    expect(submitBtn).not.toBeDisabled();
    await user.click(submitBtn);
    expect(wrapper.emitted().submit).toBeTruthy();
  });
  it("input value is set to empty after submit", async () => {
    const user = userEvent.setup();
    render(AddNewTask, {
      global: {
        plugins: [createTestingPinia()],
      },
    });

    const submitBtn = screen.getByRole("button");
    const input = screen.getByRole("textbox");
    await user.type(input, "testing");
    await user.click(submitBtn);
    expect(input).toHaveValue("");
  });
});
