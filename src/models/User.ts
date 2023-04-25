import {IntakeDaily} from "./IntakeDaily";
import {FoodItem} from "./FoodItem";

export interface User {
    id: string;
    historyIntake: [IntakeDaily];
    historyFoodItems: [FoodItem];
}