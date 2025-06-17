//describe, définir mes tests
import React from "react";

import { describe, expect, it } from "vitest";
import Card from "../components/Card";
import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

const productMock = {
  id: 1,
  title: "Product 1",
  price: 10.99,
  images: ["https://picsum.photos/200/300"],
  description: "Product 1 description",
  category: { name: "Category 1" },
};

describe("test Card component", () => {
  it("render correctly the card component", () => {
    //    card component
    render(
      <BrowserRouter>
        <Card product={productMock} />
      </BrowserRouter>
    );

    // test my card
    expect(screen.getByText("Product 1")).toBeInTheDocument();
    expect(screen.getByText("10.99$")).toBeInTheDocument();
    expect(screen.getByText("Product 1 description")).toBeInTheDocument();
    expect(screen.getByText("Category 1")).toBeInTheDocument();
    expect(screen.getByRole("img")).toHaveAttribute(
      "src",
      "https://picsum.photos/200/300"
    );
    expect(
      screen.getByRole("link", { name: "voir le produit" })
    ).toHaveAttribute("href", "/products/1");
  });
});
