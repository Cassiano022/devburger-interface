import { createBrowserRouter } from "react-router-dom";


import { Header } from "../componets/Header";
import { Footer } from "../componets/Footer";
import { Cart, Home, Login, Register } from "../containers";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <Home />
        <Footer />
      </>
    ),
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/cadastro",
    element: <Register />,
  },
  {
    path: "/cardapio",
    element: (
      <>
        <Header />
        <Menu />
      </>
    ),
  },
  {
    path: "/carrinho",
    element: <Cart />,
  },
]);
