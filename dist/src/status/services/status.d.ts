import { IStatus } from '../interfaces/status';
export declare class StatusService {
    private statusRepository;
    getAll(): Promise<IStatus[]>;
}
