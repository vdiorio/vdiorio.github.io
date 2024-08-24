import React from "react";
import { render, screen, act } from "@testing-library/react";
import Header from "../Components/Header";

// Mock da função useTranslation
jest.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (key: string) => key, // Simples mock que retorna a chave
  }),
}));

describe("Header Component", () => {
  beforeEach(() => {
    // Resetar o scroll antes de cada teste
    window.scrollY = 0;
  });

  test("renders Header component correctly", () => {
    render(<Header />);

    // Verificar se o Logo e os itens do NavBar estão sendo renderizados
    expect(screen.getByTestId("logo")).toBeInTheDocument();
    expect(screen.getByText("about")).toBeInTheDocument();
    expect(screen.getByText("experience")).toBeInTheDocument();
    expect(screen.getByText("work")).toBeInTheDocument();
    expect(screen.getByText("contact")).toBeInTheDocument();
    expect(screen.getByText("resume")).toBeInTheDocument();
  });

  test("updates header style on scroll", async () => {
    const { rerender } = render(<Header />);
    const headerElement = screen.getByTestId("header");

    expect(headerElement).not.toHaveStyle("transform: translateY(-70px)");
    expect(headerElement).toHaveStyle("height: 100px");
    expect(headerElement).not.toHaveStyle(
      "box-shadow: 0 10px 30px -10px rgba(2,12,27,0.7)"
    );

    // Simula scroll down
    await act(async () => {
      window.scrollY = 100;
      window.dispatchEvent(new Event("scroll"));
      window.scrollY = 200;
      window.dispatchEvent(new Event("scroll"));
    });

    // Rerenderiza o componente para verificar o novo estilo
    rerender(<Header />);

    // Verifica se o estilo foi atualizado corretamente
    expect(headerElement).toHaveStyle("transform: translateY(-70px)");
    expect(headerElement).toHaveStyle("height: 70px");
    expect(headerElement).toHaveStyle(
      "box-shadow: 0 10px 30px -10px rgba(2,12,27,0.7)"
    );

    // Simula scroll up
    await act(async () => {
      window.scrollY = 200;
      window.dispatchEvent(new Event("scroll"));
      window.scrollY = 100;
      window.dispatchEvent(new Event("scroll"));
    });

    // Rerenderiza o componente novamente
    rerender(<Header />);

    // Verifica se o estilo foi redefinido
    expect(headerElement).toHaveStyle("transform: translateY(0px)");

    // Simula scroll to top
    await act(async () => {
      window.scrollY = 0;
      window.dispatchEvent(new Event("scroll"));
    });

    expect(headerElement).not.toHaveStyle("transform: translateY(-70px)");
    expect(headerElement).toHaveStyle("height: 100px");
    expect(headerElement).not.toHaveStyle(
      "box-shadow: 0 10px 30px -10px rgba(2,12,27,0.7)"
    );
  });
});
