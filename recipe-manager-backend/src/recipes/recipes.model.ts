import {
    CosmosPartitionKey,
    CosmosUniqueKey,
  } from '@nestjs/azure-database';
import { IngredientsInterface } from './interfaces/ingredients.interface';
  
  @CosmosPartitionKey('id')
  export class Recipe {
    @CosmosUniqueKey()id?: string;
    title: string;
    description: string;
    ingredients: Array<IngredientsInterface>
    directions: Array<string>;
  }