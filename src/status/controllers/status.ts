import { Inject, Service } from 'typedi';
import { IStatus } from '../interfaces/status';
import { Get, JsonController } from 'routing-controllers';
import { StatusService } from '../services/status';

@Service()
@JsonController('/statuses')
export class StatusController {
  @Inject() private statusService: StatusService;

  @Get('/')
  public async getAll(): Promise<IStatus[]> {
    return this.statusService.getAll();
  }
}
