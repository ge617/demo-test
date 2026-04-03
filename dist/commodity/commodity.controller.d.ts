import { CommodityService } from './commodity.service';
import { ReturnObj } from '../public/public.dto';
export declare class CommodityController {
    private commit;
    constructor(commit: CommodityService);
    private readonly returnResult;
    getCommodity(param: any): Promise<ReturnObj>;
    addCommodity(param: any): Promise<boolean>;
    editCommidty(param: any): Promise<true | undefined>;
    deleteCommidty(param: any): Promise<true | undefined>;
}
