"use client";

import { usePathname } from "next/navigation";
import Header from "./header";

export default function ConditionalNavbar() {
  const pathname = usePathname();
  const excludeRoutes = ["/signin", "/signup"];

  return excludeRoutes.includes(pathname) ? null : <Header />;
}
