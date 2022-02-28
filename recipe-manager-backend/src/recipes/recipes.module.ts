import { Module } from '@nestjs/common';
import { RecipesController } from './recipes.controller';
import { RecipesService } from './recipes.service';

@Module({
    imports: [],
    controllers: [RecipesController],
    providers: [RecipesService],
})
export class RecipesModule {}
