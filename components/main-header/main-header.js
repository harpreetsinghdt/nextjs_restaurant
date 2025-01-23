import Link from "next/link";
import React from "react";
import logoImg from "@/assets/logo.png";
import cls from "./main-header.module.css";
import Image from "next/image";
import MainHeaderBackground from "./main-header-background.js";
import NavLink from "./nav-link";
const MainHeader = () => {
  return (
    <>
      <MainHeaderBackground />
      <header className={cls.header}>
        <Link href="/" className={cls.logo}>
          <Image src={logoImg} alt="Food logo" /> Harp's Restaurant
        </Link>
        <nav className={cls.nav}>
          <ul>
            <li>
              <NavLink href="/meals">Meals</NavLink>
            </li>
            <li>
              <NavLink href="/community">Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default MainHeader;
