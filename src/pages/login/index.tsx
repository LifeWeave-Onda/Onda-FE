import ResponsiveRenderer from "@/components/layout/ResponsiveRenderer";

import LoginMobile from "./LoginMobile";
import LoginPC from "./LoginPC";

export default function LoginPage() {
  return <ResponsiveRenderer mobile={<LoginMobile />} pc={<LoginPC />} />;
}
