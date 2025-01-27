import Link from "next/link";
import React, { Suspense } from "react";
import cls from "./page.module.css";
import MealGrid from "./meal-grid";
import { getMeals } from "@/dbcon/meals";

const Meals = async () => {
  const meals = await getMeals();
  return <MealGrid meals={meals} />;
};

const page = async () => {
  return (
    <>
      <header className={cls.header}>
        <h1>
          Delo meals, created <span className={cls.highlight}>by you</span>
        </h1>
        <p>Choose your food. its easy</p>
        <p className={cls.cta}>
          <Link href="/meals/share">Share</Link>
        </p>
      </header>
      <main className={cls.main}>
        <Suspense fallback={<p className={cls.loading}>Fetching meals...</p>}>
          <Meals />
        </Suspense>
      </main>
    </>
  );
};

export default page;
