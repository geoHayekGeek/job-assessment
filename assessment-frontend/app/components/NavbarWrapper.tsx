"use client";
import Navbar from "./Navbar";

import { usePathname } from "next/navigation";

export default function NavbarWrapper() {

  const path = usePathname();
  const hiddenPath = ['/login'];
  const showNav = !hiddenPath.includes(path);

  if (!showNav) return null;

  return (
    <Navbar />
  );
}
