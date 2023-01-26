import { render, screen } from "@testing-library/vue";
import { describe, it } from "vitest";
import router from "@/router";
import { VueQueryPlugin } from "vue-query";

import StarshipsView from "@/views/StarshipsView.vue";

describe("StarshipsView", () => {
  it("renders properly", () => {
    render(StarshipsView, {
      global: {
        plugins: [router, VueQueryPlugin],
      },
    });

    expect(screen.getByRole("heading", { level: 1 }));
  });
});
