import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/vue";
import router from "@/router";
import { VueQueryPlugin } from "vue-query";

import BrowseStarships from "@/components/BrowseStarships.vue";

describe("BrowseStarships", async () => {
  it("renders properly", () => {
    render(BrowseStarships, {
      global: {
        plugins: [router, VueQueryPlugin],
      },
    });

    expect(screen.getAllByRole("button"));
  });
  it("component renders card sceletons before getting data", () => {
    render(BrowseStarships, {
      global: {
        plugins: [router, VueQueryPlugin],
      },
    });

    expect(screen.getAllByTestId("card-sceleton"));
  });
  it("card sceletons are replaced by starship cards after getting data", async () => {
    render(BrowseStarships, {
      global: {
        plugins: [router, VueQueryPlugin],
      },
    });

    expect(await screen.findAllByTestId("card"));
    expect(screen.queryAllByTestId("card-sceleton").length).toBe(0);
  });
  it("component start with page 1 as default", () => {
    render(BrowseStarships, {
      global: {
        plugins: [router, VueQueryPlugin],
      },
    });

    expect(screen.getAllByText(/page: 1/i));
  });
  it("user can go to the next and previous pages", async () => {
    const user = userEvent.setup();
    render(BrowseStarships, {
      global: {
        plugins: [router, VueQueryPlugin],
      },
    });
    const nextButtons = screen.getAllByLabelText("next page");
    await user.click(nextButtons[0]);
    expect(screen.getAllByText(/page: 2/i));
    const prevButtons = screen.getAllByLabelText("previous page");
    await user.click(prevButtons[0]);
    expect(screen.getAllByText(/page: 1/i));
  });
  it("user can't go to the pages that doesnt exist", async () => {
    //server mock provides only 1 and 2 page reesponses
    const user = userEvent.setup();
    render(BrowseStarships, {
      global: {
        plugins: [router, VueQueryPlugin],
      },
    });
    const prevButtons = screen.getAllByLabelText("previous page");
    const nextButtons = screen.getAllByLabelText("next page");
    prevButtons.forEach((button) => {
      expect(button).toBeDisabled();
    });
    await user.click(nextButtons[0]);
    nextButtons.forEach((button) => {
      expect(button).toBeDisabled();
    });
  });
});
