//

import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { beforeEach, describe, expect, it, vi } from "vitest";
import Login from "../pages/Login";
import { AuthContext } from "../contexts/auth.context";
import "@testing-library/jest-dom";
import { toast } from "sonner";

describe("verify login", () => {
  beforeEach(() => {
    import.meta.env.VITE_API_URL = "https://fake-api.com";

    localStorage.clear();
    vi.clearAllMocks();
  });
  const mocksetToken = vi.fn();
  vi.mock("sonner", () => ({
    toast: {
      success: vi.fn(),
    },
  }));
  import.meta.env.VITE_API_URL = "https://fake-api.com";

  //    simule un fetch
  globalThis.fetch = vi.fn(() =>
    Promise.resolve({
      json: () =>
        Promise.resolve({
          success: true,
          accessToken: "faketoken",
          user: {
            id: 1,
            name: "meriem",
            role: "USER",
          },
        }),
    })
  );
  //   verify login
  it("verify login component", () => {
    // appeller la route le composant ....
    render(
      <BrowserRouter>
        <AuthContext.Provider value={{ setToken: mocksetToken }}>
          <Login />
        </AuthContext.Provider>
      </BrowserRouter>
    );
    //  verifie si le titre est visible
    expect(screen.getByText(/connexion/i)).toBeInTheDocument();
    //  vérifie les inputs
    expect(screen.getByPlaceholderText(/Adresse e-mail/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/mot de passe/i)).toBeInTheDocument();
    //  verifie si le button
    expect(
      screen.getByRole("button", { name: /Se connecter/i })
    ).toBeInTheDocument();
  });

  //   simuler un fetch
  it("test fetch login api", async () => {
    render(
      <BrowserRouter>
        <AuthContext.Provider value={{ setToken: mocksetToken }}>
          <Login />
        </AuthContext.Provider>
      </BrowserRouter>
    );
    //  remplir le formulaire
    fireEvent.change(screen.getByPlaceholderText(/adresse e-mail/i), {
      target: { value: "john.doe@fake.com" },
    });
    fireEvent.change(screen.getByPlaceholderText("Mot de passe"), {
      target: { value: "password123456789" },
    });
    //  simule le click
    fireEvent.click(screen.getByText(/se connecter/i));
    //
    await waitFor(() => {
      expect(mocksetToken).toHaveBeenCalledWith("faketoken");
      expect(localStorage.getItem("access_token")).toBe("faketoken");
      expect(localStorage.getItem("user")).toContain("USER");
      expect(toast.success).toHaveBeenCalledWith("Connexion réussie");
    });
  });
});
