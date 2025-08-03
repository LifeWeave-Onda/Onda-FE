import { useEffect } from "react";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

import BreederInfoPage from "@/pages/breeder-detail/BreederInfoPage";
import BreederListPage from "@/pages/breeder-list";
import FindIdPasswordPage from "@/pages/find-id-password";
import FindIdResult from "@/pages/find-id-password/result/FindIdResult";
import FindPasswordResult from "@/pages/find-id-password/result/FindPasswordResult";
import LandingPage from "@/pages/landing";
import LoginPage from "@/pages/login/LoginPage";
import SignUpPage from "@/pages/sign-up/SignUpPage";

import SignUpResult from "./pages/sign-up/SignUpResult";

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
        <Route path="sign-up" element={<SignUpPage />} />
        <Route path="sign-up-result" element={<SignUpResult />} />
        {/* Main */}
        <Route path="/breeder-list" element={<BreederListPage />} />
        <Route
          path="/breeder-detail/:id"
          element={<Navigate to="info" replace />}
        />
        <Route path="/breeder-detail/:id/*" element={<BreederInfoPage />} />
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
