"use client";

import { usePathname } from "next/navigation";
import Footer from "./footer";

export default function ConditionalFooter() {
  const pathname = usePathname();
  const excludeRoutes = ["/studio/structure","/studio/vision","/studio/schedules/state/scheduled","/signin","/signup"];

  return excludeRoutes.includes(pathname) ? null : <Footer />;
}
