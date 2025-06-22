import { BrowserRouter, Route, Routes } from "react-router-dom";

import LandingPage from "@/pages/landing";

import LoginPage from "./pages/login";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}
