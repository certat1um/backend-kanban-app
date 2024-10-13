import { Body, Delete, JsonController, Param, Post, Put, UseBefore } from 'routing-controllers';
import { Inject, Service } from 'typedi';
import { CardService } from '../services/card';
import { ReorderBody, ICard } from '../interfaces/card';
import { Card } from '../models/Card';
import { validate } from '../../_common/middlewares/joi.validator';
import { create, deleteById, reorder, updateById } from '../validators';

@Service()
@JsonController('/cards')
export class CardController {
  @Inject() private cardService: CardService;

  @Post('/create')
  @UseBefore(validate(create))
  public async create(@Body() data: ICard): Promise<Card> {
    return this.cardService.create(data);
  }

  @Put('/reorder')
  @UseBefore(validate(reorder))
  public async reorder(@Body() data: ReorderBody): Promise<{ status: boolean }> {
    return this.cardService.reorder(data);
  }

  @Put('/:id')
  @UseBefore(validate(updateById))
  public async updateById(@Param('id') id: string, @Body() data: Partial<ICard>): Promise<Card> {
    return this.cardService.updateById(id, data);
  }

  @Put('/drag-and-drop/:id')
  @UseBefore(validate(updateById))
  public async dragAndDrop(
    @Param('id') id: string,
    @Body() data: { status_id: string },
  ): Promise<Card> {
    return this.cardService.dragAndDrop(id, data.status_id);
  }

  @Delete('/:id')
  @UseBefore(validate(deleteById))
  public async deleteById(@Param('id') id: string): Promise<{ status: boolean }> {
    return this.cardService.deleteById(id);
  }
}
