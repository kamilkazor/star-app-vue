import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/vue";

import StarshipCardSceleton from "@/components/StarshipCardSceleton.vue";

describe("StarshipCardSceleton", async () => {
  it("renders properly", () => {
    render(StarshipCardSceleton);

    expect(screen.getAllByRole("heading"));
  });
});
