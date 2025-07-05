"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function Navlink({ children, to }) {
  const path = usePathname();

  return (
    <Link
      href={to}
      className={`${path === to ? "text-accent active" : "text-low"}`}
    >
      {children}
    </Link>
  );
}
