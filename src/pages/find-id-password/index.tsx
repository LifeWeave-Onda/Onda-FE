import ResponsiveRenderer from "@/components/layout/ResponsiveRenderer";

import FindMobile from "./findMobile";
import FindPC from "./findPC";

export default function FindPage() {
  return <ResponsiveRenderer mobile={<FindMobile />} pc={<FindPC />} />;
}
