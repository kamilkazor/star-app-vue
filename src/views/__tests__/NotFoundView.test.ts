import { render, screen } from "@testing-library/vue";
import { describe, it } from "vitest";
import router from "@/router";

import NotFoundView from "@/views/NotFoundView.vue";

describe("NotFoundView", () => {
  it("renders properly", () => {
    render(NotFoundView, {
      global: {
        plugins: [router],
      },
    });

    expect(screen.getByRole("heading", { level: 1 }));
  });
});
