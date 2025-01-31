"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";
import { revalidatePath } from "next/cache";

export const shareMeal = async (prevState, frmData) => {
  const isInvalidText = (text) => {
    return !text || text.trim() === "";
  };

  const meal = {
    title: frmData.get("title"),
    summary: frmData.get("summary"),
    instructions: frmData.get("instructions"),
    creator: frmData.get("name"),
    creator_email: frmData.get("email"),
    image: frmData.get("image"),
  };

  if (
    isInvalidText(meal.title) ||
    isInvalidText(meal.summary) ||
    isInvalidText(meal.instructions) ||
    isInvalidText(meal.creator) ||
    isInvalidText(meal.creator_email) ||
    !meal.creator_email.includes("@") ||
    !meal.image ||
    meal.image.size == 0
  ) {
    // throw new Error("Invalid input!");
    return {
      message: "invlaid input!",
    };
  }

  console.log(meal);
  await saveMeal(meal);
  revalidatePath("/meals");
  // revalidatePath('/meals','page');
  // revalidatePath('/meals','layout');
  // revalidatePath('/','layout');
  redirect("/meals");
};
