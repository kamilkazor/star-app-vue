import { render, screen } from "@testing-library/vue";
import { describe, it } from "vitest";
import router from "@/router";

import NavBar from "@/components/NavBar.vue";

describe("NavBar", () => {
  it("renders properly", () => {
    render(NavBar, {
      global: {
        plugins: [router],
      },
    });

    expect(screen.getByText(/home/i));
    expect(screen.getByText(/starships/i));
    expect(screen.getByText(/tasks/i));
  });
});
