import {FoodNutritions} from "./FoodNutritions";

export interface FoodItem {
    name: string;
    image: string;
    nutritions: FoodNutritions;
    category: "protein" | "carbohydrate" | "fat" | "fiber";
}