import { render, screen } from "@testing-library/vue";
import { describe, it } from "vitest";
import router from "@/router";

import HomeView from "@/views/HomeView.vue";

describe("HomeView", () => {
  it("renders properly", () => {
    render(HomeView, {
      global: {
        plugins: [router],
      },
    });

    expect(screen.getByRole("heading", { level: 1 }));
  });
});
