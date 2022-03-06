import { Controller, Get, Post, Delete, Param, Body, Put  } from '@nestjs/common';
import { RecipesService } from './recipes.service';
import { Recipe } from './recipes.model'

@Controller('recipes')
export class RecipesController {

    constructor(private recipesService: RecipesService) {}
    
    @Get() // /recipes
    async findAll(): Promise<Recipe[]> {
        return this.recipesService.findAll();
    }
}

@Controller('recipe')
export class RecipeController {

    constructor(private recipesService: RecipesService) {}
    
    @Post() // /recipes
    async create(@Body() recipe: Recipe) {
        this.recipesService.create(recipe);
    }
    
    @Get(':id')
    findOne(@Param('id') id: string) {
      return this.recipesService.findById(id);
    }

    @Delete(':id')
    deleteOne(@Param('id') id: string) {
      return this.recipesService.remove(id, id);
    }

    //TODO Update
    // @Put(':id')
    // updateOne(@Param('id') id: string, @Body() recipe: Recipe) {
    //   return this.recipesService.update(id, recipe);
    // }
}
