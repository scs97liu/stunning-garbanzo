import { Module } from '@nestjs/common';
import { AzureCosmosDbModule } from '@nestjs/azure-database';
import { RecipeController, RecipesController } from './recipes.controller';
import { Recipe } from './recipes.model';
import { RecipesService } from './recipes.service';

@Module({
    imports: [
        AzureCosmosDbModule.forFeature([{ dto: Recipe }])
    ],
    providers: [RecipesService],
    controllers: [RecipesController, RecipeController ],
})
export class RecipesModule {}
