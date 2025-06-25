import { BrowserRouter, Route, Routes } from "react-router-dom";

import LandingPage from "@/pages/landing";

import FindPage from "./pages/find-id-password";
import LoginPage from "./pages/login";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/find" element={<FindPage />} />
      </Routes>
    </BrowserRouter>
  );
}
