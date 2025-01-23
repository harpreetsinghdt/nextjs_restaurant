import Link from "next/link";
import React from "react";
import logoImg from "@/assets/logo.png";
import cls from "./main-header.module.css";
import Image from "next/image";
import MainHeaderBackground from "./main-header-background.js";

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
              <Link href="/meals">Meals</Link>
            </li>
            <li>
              <Link href="/community">Community</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default MainHeader;
