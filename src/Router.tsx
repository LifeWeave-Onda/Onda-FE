import { BrowserRouter, Route, Routes } from "react-router-dom";

import BreederListPage from "@/pages/breeder-list";
import LandingPage from "@/pages/landing";

import FindIdPasswordPage from "./pages/find-id-password";
import LoginPage from "./pages/login";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/find-id-password" element={<FindIdPasswordPage />} />
        <Route path="/breeder-list" element={<BreederListPage />} />
      </Routes>
    </BrowserRouter>
  );
}
