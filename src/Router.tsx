import { BrowserRouter, Route, Routes } from "react-router-dom";

import BreederListPage from "@/pages/breeder-list";
import LandingPage from "@/pages/landing";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/breeder-list" element={<BreederListPage />} />
      </Routes>
    </BrowserRouter>
  );
}
