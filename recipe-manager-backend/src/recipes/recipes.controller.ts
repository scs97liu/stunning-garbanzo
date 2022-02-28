import { Controller, Get, Post, Patch, Delete, Param, Body  } from '@nestjs/common';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { RecipesService } from './recipes.service';
import { RecipeInterface } from './interfaces/recipe.interface';

@Controller('recipes')
export class RecipesController {

    constructor(private recipesService: RecipesService) {}
    
    @Get() // /recipes
    async findAll(): Promise<RecipeInterface[]> {
        return this.recipesService.findAll();
    }

    @Post() // /recipes
    async create(@Body() CreateRecipeDto: CreateRecipeDto) {
        this.recipesService.create(CreateRecipeDto);
    }

    
    @Get(':id') // /recipes:id
    findOne(@Param() params): string {
    console.log(params.id);
    return `This action returns a #${params.id} user`;
    }

    @Patch(':id') // /recipes:id
    updateOne(@Param() params): string {
    console.log(params.id);
    return `This action updates a #${params.id} user`;
    }

    @Delete(':id') // /recipes:id
    deleteOne(@Param() params): string {
    console.log(params.id);
    return `This action deletes a #${params.id} user`;
    }


}
