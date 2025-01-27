import React from "react";
import MealItem from "./meal-item";
import cls from "./meals-grid.module.css";
const MealGrid = ({ meals }) => {
  return (
    <ul className={cls.meals}>
      {meals.map((meal) => (
        <li key={meal.id}>
          <MealItem {...meal} />
        </li>
      ))}
    </ul>
  );
};

export default MealGrid;
