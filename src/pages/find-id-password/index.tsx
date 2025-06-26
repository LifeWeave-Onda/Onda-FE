import ResponsiveRenderer from "@/components/layout/ResponsiveRenderer";

import FindMobile from "./FindMobile";
import FindPC from "./FindPC";

export default function FindIdPasswordPage() {
  return <ResponsiveRenderer mobile={<FindMobile />} pc={<FindPC />} />;
}
