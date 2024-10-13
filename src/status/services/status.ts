import { Inject, Service } from 'typedi';
import { IStatus } from '../interfaces/status';
import { StatusRepository } from '../repositories/status';

@Service()
export class StatusService {
  @Inject() private statusRepository: StatusRepository;

  public async getAll(): Promise<IStatus[]> {
    return this.statusRepository.getAll();
  }
}
