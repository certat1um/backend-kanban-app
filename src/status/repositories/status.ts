import { Service } from 'typedi';
import { IStatus } from '../interfaces/status';
import { Status } from '../models/Status';

@Service()
export class StatusRepository {
  // public async getByIds(ids: string[]): Promise<IStatus[]> {
  //   return Status.query().findByIds(ids);
  // }

  public async getAll(): Promise<IStatus[]> {
    return Status.query();
  }
}
