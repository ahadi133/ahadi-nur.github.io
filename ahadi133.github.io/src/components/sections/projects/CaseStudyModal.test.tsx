import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { CaseStudyModal } from "./CaseStudyModal";

function renderModal() {
  render(
    <CaseStudyModal slug="demo" title="Demo Dashboard" tool="Tableau">
      <p>Case study body</p>
    </CaseStudyModal>,
  );
}

describe("CaseStudyModal", () => {
  it("opens with the case study and a link to the full page", async () => {
    renderModal();
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();

    await userEvent.click(screen.getByRole("button", { name: /read case study/i }));

    const dialog = screen.getByRole("dialog", { name: "Demo Dashboard" });
    expect(dialog).toHaveTextContent("Case study body");
    expect(screen.getByRole("link", { name: /open full page/i })).toHaveAttribute(
      "href",
      "/projects/demo",
    );
  });

  it("closes on Escape and returns focus to the trigger", async () => {
    renderModal();
    const trigger = screen.getByRole("button", { name: /read case study/i });
    await userEvent.click(trigger);
    expect(screen.getByRole("dialog")).toBeInTheDocument();

    await userEvent.keyboard("{Escape}");

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    expect(trigger).toHaveFocus();
  });

  it("closes with the close button", async () => {
    renderModal();
    await userEvent.click(screen.getByRole("button", { name: /read case study/i }));
    await userEvent.click(screen.getByRole("button", { name: "Close" }));
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });
});
