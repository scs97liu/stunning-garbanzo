import { Controller, Get, Post, Patch, Delete, Param, Body  } from '@nestjs/common';
import { RecipesService } from './recipes.service';
import { Recipe } from './recipes.model'

@Controller('recipes')
export class RecipesController {

    constructor(private recipesService: RecipesService) {}
    
    @Get() // /recipes
    async findAll(): Promise<Recipe[]> {
        return this.recipesService.findAll();
    }

    @Post() // /recipes
    async create(@Body() recipe: Recipe) {
        this.recipesService.create(recipe);
    }

    
    @Get(':id')
    findOne(@Param('id') id: string) {
      return this.recipesService.findById(id);
    }

    @Patch(':id')
    updateOne(@Param('id') recipe: Recipe) {
      return this.recipesService.upsert(recipe);
    }


    @Delete(':id')
    deleteOne(@Param('id') id: string) {
      return this.recipesService.remove(id, id);
    }
}
