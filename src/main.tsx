import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import SignUpPage from "./pages/SignUpPage.tsx";
import SignInPage from "./pages/SignInPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/sign-in",
        Component: SignInPage,
      },
      {
        path: "/sign-up",
        Component: SignUpPage,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
