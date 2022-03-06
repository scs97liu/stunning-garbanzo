import { Module } from '@nestjs/common';
import { AzureCosmosDbModule } from '@nestjs/azure-database';
import { RecipesController } from './recipes.controller';
import { Recipe } from './recipes.model';
import { RecipesService } from './recipes.service';

@Module({
    imports: [
        AzureCosmosDbModule.forRoot({
            //TODO- FIX ENV Variable retrieval
            dbName: process.env.AZURE_COSMOS_DB_NAME,
            endpoint: process.env.AZURE_COSMOS_DB_ENDPOINT,
            key: process.env.AZURE_COSMOS_DB_KEY,
          }),
        AzureCosmosDbModule.forFeature([{ dto: Recipe }])
    ],
    providers: [RecipesService],
    controllers: [RecipesController ],
})
export class RecipesModule {}
