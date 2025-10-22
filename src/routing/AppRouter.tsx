import type React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import { routes, type Route as RouteType } from "./routes";
import { AuthLayout } from "../pages/auth/AuthLayout";
import { LoginPage } from "../pages/auth/login";
import { RegisterPage } from "../pages/auth/register";
import { ProtectedRoute } from "./ProtectedRoutes";

export const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/login" element={<AuthLayout Component={LoginPage} />} />
        <Route path="/signup" element={<AuthLayout Component={RegisterPage} />} />
        {routes.map((route: RouteType) => (
            <Route key={route.name} path={route.path} element={<ProtectedRoute Component={route.element} />} />
        ))}
    </Routes>
    </BrowserRouter>
  );
}