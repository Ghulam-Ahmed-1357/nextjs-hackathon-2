"use client";

import { usePathname } from "next/navigation";
import Header from "./header";

export default function ConditionalNavbar() {
  const pathname = usePathname();
  const excludeRoutes = ["/studio/structure","/studio/vision","/studio/schedules/state/scheduled"];

  return excludeRoutes.includes(pathname) ? null : <Header />;
}
