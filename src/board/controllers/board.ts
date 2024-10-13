import {
  Body,
  Delete,
  Get,
  JsonController,
  Param,
  Post,
  Put,
  UseBefore,
} from 'routing-controllers';
import { Inject, Service } from 'typedi';
import { BoardService } from '../services/board';
import { FullBoardData, IBoard } from '../interfaces/board';
import { Board } from '../models/Board';
import { validate } from '../../_common/middlewares/joi.validator';
import { create, deleteById, getById, updateById } from '../validators';

@Service()
@JsonController('/boards')
export class BoardController {
  @Inject() private boardService: BoardService;

  @Get('/:id')
  @UseBefore(validate(getById))
  public async getById(@Param('id') id: string): Promise<FullBoardData> {
    return this.boardService.getFullData(id);
  }

  @Post('/create')
  @UseBefore(validate(create))
  public async create(@Body() data: IBoard): Promise<FullBoardData> {
    return this.boardService.create(data);
  }

  @Put('/:id')
  @UseBefore(validate(updateById))
  public async updateById(@Param('id') id: string, @Body() data: Partial<IBoard>): Promise<Board> {
    return this.boardService.updateById(id, data);
  }

  @Delete('/:id')
  @UseBefore(validate(deleteById))
  public async deleteById(@Param('id') id: string): Promise<{ status: boolean }> {
    return this.boardService.deleteById(id);
  }
}
