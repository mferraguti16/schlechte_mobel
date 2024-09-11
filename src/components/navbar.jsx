"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { ArrowDownWideNarrow } from "lucide-react";
import DropdownFilter from "./DropdownFilter";
import { fetchCategories } from "@/utils/data";

// import styles from "./Footer.module.css"; // Utilisation de CSS Modules pour le style

function Navbar() {
  const pathname = usePathname();
  if (
    pathname === "/admin/log-in" ||
    pathname === "/admin/sale-validation" ||
    pathname === "/admin/redirection" ||
    pathname === "/admin/redirection/sales" ||
    pathname === "/admin/redirection/stock"
  ) {
    return null;
  }

  return (
    <div className="flex justify-between items-center p-6 h-14 w-full bg-[#ffedd5] border-t-2 border-[#b77955]">
      <ArrowDownWideNarrow />
      <DropdownFilter />
      <Link href="/furniture/catalogue?id=1">Chaise</Link>
      <Link href="/furniture/catalogue?id=2">Fauteuils</Link>
      <Link href="/furniture/catalogue?id=3">Tables</Link>
      <Link href="/furniture/catalogue?id=4">Canapés</Link>
      <Link href="/furniture/catalogue?id=5">Armoires</Link>
      <Link href="/furniture/catalogue?id=6">Lampes</Link>
    </div>
  );
}
export default Navbar;