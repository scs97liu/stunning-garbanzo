import { InjectModel } from '@nestjs/azure-database';
import { Container } from '@azure/cosmos';
import { Logger, Injectable } from '@nestjs/common';
import { Recipe } from './recipes.model';

@Injectable()
export class RecipesService {
  constructor(@InjectModel(Recipe) private readonly container: Container) {}
  private logger = new Logger(this.constructor.name);

  async create(item: Recipe): Promise<Recipe> {
    const response = await this.container.items.create(item);
    this.logger.verbose(`Create RUs: ${response.requestCharge}`);
    return response.resource;
  }

  async upsert(item: Recipe): Promise<Recipe> {
    const response = await this.container.items.upsert<Recipe>(item);
    this.logger.verbose(`Upsert RUs: ${response.requestCharge}`);
    return response.resource;
  }

  async remove(id: string, partitionKeyValue: any) {
    const item = this.container.item(id, partitionKeyValue);
    const result = await item.delete();
    this.logger.verbose(`Remove item RUs: ${result.requestCharge}`);
  }

  async findAll(): Promise<Recipe[]> {
    const querySpec = {
      query: 'SELECT * FROM root r',
    };

    const results = await this.container.items
      .query<Recipe>(querySpec, {})
      .fetchAll();
    this.logger.verbose(`Find By Id RUs: ${results.requestCharge}`);
    return results.resources;
  }

  async findById(id: string): Promise<Recipe> {
    const querySpec = {
      query: 'SELECT * FROM root r WHERE r.id=@id',
      parameters: [
        {
          name: '@id',
          value: id,
        },
      ],
    };

    const results = await this.container.items
      .query<Recipe>(querySpec, {})
      .fetchAll();
    this.logger.verbose(`Find By Id RUs: ${results.requestCharge}`);
    return results.resources.shift();
  }
}