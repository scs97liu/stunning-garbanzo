import { IngredientsInterface  } from "./ingredients.interface";

export interface RecipeInterface {
    id: string;
    title: number;
    description: string;
    ingredients: Array<IngredientsInterface>;
    directions: Array<string>;
}