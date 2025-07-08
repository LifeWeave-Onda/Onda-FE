import { useEffect } from "react";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

import BreederAnimal from "@/pages/breeder-detail/BreederAnimal";
import BreederDetailLayout from "@/pages/breeder-detail/BreederDetailLayout";
import BreederInfo from "@/pages/breeder-detail/BreederInfo";
import BreederListPage from "@/pages/breeder-list";
import FindIdPasswordPage from "@/pages/find-id-password";
import FindIdResult from "@/pages/find-id-password/result/FindIdResult";
import FindPasswordResult from "@/pages/find-id-password/result/FindPasswordResult";
import LandingPage from "@/pages/landing";
import LoginPage from "@/pages/login";

export default function Router() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* Auth */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/find-id-password" element={<FindIdPasswordPage />} />
        <Route
          path="/find-id-password/find-id-result"
          element={<FindIdResult />}
        />
        <Route
          path="/find-id-password/find-password-result"
          element={<FindPasswordResult />}
        />
        {/* Main */}
        <Route path="/breeder-list" element={<BreederListPage />} />
        <Route path="/breeder-detail/:id" element={<BreederDetailLayout />}>
          <Route index element={<Navigate to="info" replace />} />
          <Route path="info" element={<BreederInfo />} />
          <Route path="animal" element={<BreederAnimal />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
