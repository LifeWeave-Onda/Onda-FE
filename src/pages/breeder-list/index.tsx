import ResponsiveRenderer from "@/components/layout/ResponsiveRenderer";

import BreederListMobile from "./BreederListMobile";
import BreederListPC from "./BreederListPC";

export default function BreederListPage() {
  return (
    <ResponsiveRenderer mobile={<BreederListMobile />} pc={<BreederListPC />} />
  );
}
