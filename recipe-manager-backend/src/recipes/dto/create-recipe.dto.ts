import { IngredientsInterface } from '../interfaces/ingredients.interface'

export class CreateRecipeDto {
    id: string;
    title: number;
    description: string;
    ingredients: Array<IngredientsInterface>;
    directions: Array<string>;
}

