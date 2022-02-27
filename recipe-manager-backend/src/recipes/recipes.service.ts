import { Injectable } from '@nestjs/common';
import { RecipeInterface } from './interfaces/recipe.interface';

@Injectable()
export class RecipesService {
  private readonly recipes: RecipeInterface[] = [];

  create(recipe: RecipeInterface) {
    this.recipes.push(recipe);
  }

  findAll(): RecipeInterface[] {
    return this.recipes;
  }
}
