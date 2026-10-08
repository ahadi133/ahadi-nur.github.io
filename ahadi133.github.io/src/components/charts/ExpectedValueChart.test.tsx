import { fireEvent, render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ExpectedValueChart } from "./ExpectedValueChart";

const payoffs = [
  { option: "Outdoors", sunny: 100, rainy: -20 },
  { option: "Porch", sunny: 90, rainy: 50 },
  { option: "Indoors", sunny: 40, rainy: 40 },
];

function bestLabel() {
  const badge = screen.getByText("BEST");
  return badge.closest("li")?.textContent ?? "";
}

describe("ExpectedValueChart", () => {
  it("marks Porch as best at the default 50%", () => {
    render(<ExpectedValueChart payoffs={payoffs} />);
    expect(bestLabel()).toMatch(/Porch/);
    expect(screen.getByRole("img")).toHaveAccessibleName(/87\.5%/);
  });

  it("switches to Outdoors when the slider passes the threshold", () => {
    render(<ExpectedValueChart payoffs={payoffs} />);
    fireEvent.change(screen.getByRole("slider"), { target: { value: "95" } });
    expect(bestLabel()).toMatch(/Outdoors/);
    const outdoors = screen.getByText("Outdoors").closest("li") as HTMLElement;
    expect(within(outdoors).getByText("$94.0")).toBeInTheDocument();
  });
});
