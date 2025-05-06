import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import SignUpPage from "./pages/SignUpPage.tsx";
import SignInPage from "./pages/SignInPage.tsx";
import { Toaster } from "sonner";
import MainPage from "./pages/MainPage.tsx";
import { SidebarProvider } from "./components/ui/sidebar.tsx";

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
  {
    path: "/main",
    element: <MainPage />,
    children: [{}],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SidebarProvider defaultOpen={false}>
      <RouterProvider router={router} />
      <Toaster />
    </SidebarProvider>
  </StrictMode>,
);
