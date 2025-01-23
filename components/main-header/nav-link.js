"use client";
import React from "react";
import { usePathname } from "next/navigation";
import cls from "./nav-link.module.css";
import Link from "next/link";

const NavLink = ({ href, children }) => {
  const path = usePathname();
  return (
    <Link
      href={href}
      className={
        path.startsWith(href) ? `${cls.link} ${cls.active}` : `${cls.link}`
      }
      name={cls.link}
    >
      {children}
    </Link>
  );
};

export default NavLink;
