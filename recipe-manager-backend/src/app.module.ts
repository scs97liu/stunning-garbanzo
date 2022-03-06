import { Module } from '@nestjs/common';
import { AzureCosmosDbModule } from '@nestjs/azure-database';
import { ConfigModule } from '@nestjs/config';
import { RecipesModule } from './recipes/recipes.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    RecipesModule,
    AzureCosmosDbModule.forRoot({
      dbName: `${process.env.AZURE_COSMOS_DB_NAME}`,
      endpoint: `${process.env.AZURE_COSMOS_DB_ENDPOINT}`,
      key: `${process.env.AZURE_COSMOS_DB_KEY}`,
    }),
  ]
})

export class AppModule {}
