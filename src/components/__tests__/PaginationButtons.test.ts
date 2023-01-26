import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/vue";
import userEvent from "@testing-library/user-event";

import PaginationButtons from "@/components/PaginationButtons.vue";

describe("PaginationButtons", async () => {
  it("renders properly", () => {
    render(PaginationButtons, {
      props: {
        page: 5,
        prev: false,
        next: false,
      },
    });

    expect(screen.getByLabelText("previous page"));
    expect(screen.getByLabelText("current page"));
    expect(screen.getByLabelText("next page"));
  });
  it("proper page number is displayed", () => {
    render(PaginationButtons, {
      props: {
        page: 5,
        prev: false,
        next: false,
      },
    });

    expect(screen.getByText(/page: 5/));
  });
  it("buttons are dissabled when there is no previous or next page", () => {
    render(PaginationButtons, {
      props: {
        page: 0,
        prev: false,
        next: false,
      },
    });

    const prevBtn = screen.getByLabelText("previous page");
    const nextBtn = screen.getByLabelText("next page");
    expect(prevBtn).toBeDisabled();
    expect(nextBtn).toBeDisabled();
  });
  it("buttons are enabled when there is previous or next page", () => {
    render(PaginationButtons, {
      props: {
        page: 0,
        prev: true,
        next: true,
      },
    });

    const prevBtn = screen.getByLabelText("previous page");
    const nextBtn = screen.getByLabelText("next page");
    expect(prevBtn).not.toBeDisabled();
    expect(nextBtn).not.toBeDisabled();
  });
  it("prevPage and nextPage events are emitted after clicking buttons", async () => {
    const user = userEvent.setup();
    const wrapper = render(PaginationButtons, {
      props: {
        page: 0,
        prev: true,
        next: true,
      },
    });

    const prevBtn = screen.getByLabelText("previous page");
    const nextBtn = screen.getByLabelText("next page");
    expect(wrapper.emitted().prevPage).not.toBeTruthy();
    await user.click(prevBtn);
    expect(wrapper.emitted().prevPage).toBeTruthy();
    expect(wrapper.emitted().nextPage).not.toBeTruthy();
    await user.click(nextBtn);
    expect(wrapper.emitted().nextPage).toBeTruthy();
  });
});
