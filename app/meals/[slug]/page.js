import React from "react";
import cls from "./page.module.css";
import Image from "next/image";
import { getMeal } from "@/dbcon/meals";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const meal = await getMeal(params.slug);
  if (!meal) {
    notFound();
  }
  return {
    title: meal.title,
    description: meal.summary,
  };
}

const page = ({ params }) => {
  const meal = getMeal(params.slug);
  if (!meal) {
    notFound();
  }
  meal.instructions = meal.instructions.replace(/\n/g, "<br />");
  return (
    <>
      <header className={cls.header}>
        <div className={cls.image}>
          <Image
            src={`https://sainis-food-images.s3.us-east-2.amazonaws.com/${meal.image}`}
            alt={"meal image"}
            fill
          />
        </div>
        <div className={cls.headerText}>
          <h1>{meal.title}</h1>
          <p className={cls.creator}>
            by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={cls.summary}>{meal.summary}</p>
        </div>
      </header>
      <main>
        <p
          className={cls.instructions}
          dangerouslySetInnerHTML={{
            __html: meal.instructions,
          }}
        ></p>
      </main>
    </>
  );
};

export default page;
