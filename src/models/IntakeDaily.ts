import {FoodNutritions} from "./FoodNutritions";
import {FoodItem} from "./FoodItem";

export interface IntakeDaily {
    date: Date;
    target: FoodNutritions;
    nutritions: FoodNutritions;
    food: [{
        item: FoodItem;
        quantity: number;
    }];
}