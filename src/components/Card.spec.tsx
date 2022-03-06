import { describe, expect, it } from "vitest";
import { render, screen } from "../test/test-utils";

import Card from "../../src/components/Card";

describe("Card", () => {
  it("should card header", () => {
    render(<Card link="https://example.com" header="Example header" content="Example content" />);
    expect(screen.getByText("Example header")).toBeInTheDocument();
  });

  it("should card conent", () => {
    render(<Card link="https://example.com" header="Example header" content="Example content" />);
    expect(screen.getByText("Example content")).toBeInTheDocument();
  });
});
