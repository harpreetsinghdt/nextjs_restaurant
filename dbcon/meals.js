import fs from "node:fs";
import { S3 } from "@aws-sdk/client-s3";

import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";

const s3 = new S3({
  region: "us-east-2",
});

const db = sql("meals.db");

export const getMeals = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  // throw new Error("loading data failed!");
  return db.prepare("SELECT * FROM meals").all();
};

export const getMeal = (slug) => {
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
};

export const saveMeal = async (meal) => {
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);

  const extn = meal.image.name.split(".").pop();
  const fileName = `${meal.slug}.${extn}`;

  // const stream = fs.createWriteStream(`public/images/${fileName}`);
  const bufferedImage = await meal.image.arrayBuffer();

  s3.putObject({
    Bucket: "sainis-food-images",
    Key: fileName,
    Body: Buffer.from(bufferedImage),
    ContentType: meal.image.type,
  });

  // stream.write(Buffer.from(bufferedImage), (err) => {
  //   if (err) {
  //     throw new Error("Saving image error!");
  //   }
  // });

  // meal.image = `/images/${fileName}`;
  meal.image = `${fileName}`;

  return db
    .prepare(
      `
    INSERT INTO meals(title, summary, instructions, creator, creator_email, image, slug
    ) values (
         @title,
         @summary,
         @instructions,
         @creator,
         @creator_email,
         @image,
         @slug)
    `
    )
    .run(meal);
};
