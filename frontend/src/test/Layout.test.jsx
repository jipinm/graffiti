import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Layout from "@/components/Layout";

describe("Layout", () => {
  it("renders the GRAFFITI brand and Kochi mention", () => {
    render(
      <MemoryRouter>
        <Layout />
      </MemoryRouter>
    );
    // Brand appears in the logo
    expect(screen.getAllByText(/GRAFFITI/i).length).toBeGreaterThan(0);
    // Announcement strip mentions Kochi
    expect(screen.getAllByText(/Kochi/i).length).toBeGreaterThan(0);
  });

  it("exposes the primary nav links", () => {
    render(
      <MemoryRouter>
        <Layout />
      </MemoryRouter>
    );
    ["Home", "Sell Device", "Buy Devices", "How It Works", "Why GRAFFITI", "Stores", "FAQs", "Contact"].forEach(
      (label) => {
        expect(screen.getAllByText(label).length).toBeGreaterThan(0);
      }
    );
  });
});
