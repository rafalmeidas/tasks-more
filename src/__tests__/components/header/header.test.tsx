import { render, screen } from "@testing-library/react";
import { useSession } from "next-auth/react";
import "@testing-library/jest-dom";

import { Header } from "../../../components/header";

jest.mock("next-auth/react");

describe("<Header />", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should show login button when not having a session", () => {
    (useSession as jest.Mock).mockReturnValue({
      data: null,
      status: "unauthenticated",
    });

    render(<Header />);

    expect(screen.getByText("Acessar")).toBeInTheDocument();
  });

  it("should not show my panel button when not having a session", () => {
    (useSession as jest.Mock).mockReturnValue({
      data: null,
      status: "unauthenticated",
    });

    render(<Header />);

    expect(screen.queryByText("Meu Painel")).not.toBeInTheDocument();
  });

  it("should show username and logout button when there is a session", () => {
    (useSession as jest.Mock).mockReturnValue({
      data: { user: { name: "Usuário de Teste" } },
      status: "authenticated",
    });

    render(<Header />);

    expect(screen.getByText("Olá Usuário de Teste")).toBeInTheDocument();
  });

  it("should show my panel button when having a session", () => {
    (useSession as jest.Mock).mockReturnValue({
      data: { user: { name: "Usuário de Teste" } },
      status: "authenticated",
    });

    render(<Header />);

    expect(screen.getByText("Meu Painel")).toBeInTheDocument();
  });
});
