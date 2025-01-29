"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";

export const shareMeal = async (frmData) => {
  const meal = {
    title: frmData.get("title"),
    summary: frmData.get("summary"),
    instructions: frmData.get("instructions"),
    creator: frmData.get("name"),
    creator_email: frmData.get("email"),
    image: frmData.get("image"),
  };

  console.log(meal);
  await saveMeal(meal);
  redirect("/meals");
};
