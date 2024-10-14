import { IStatus } from '../interfaces/status';
export declare class StatusController {
    private statusService;
    getAll(): Promise<IStatus[]>;
}
