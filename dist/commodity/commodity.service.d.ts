import { commodity } from './Interface/commodity.dto';
export declare class CommodityService {
    private readonly result;
    getCommodity(params: any): {
        current: any;
        size: any;
        total: number;
        records: commodity[];
    };
    addCommodity(params: commodity): boolean;
    editCommdity(params: commodity): true | undefined;
    deleteCommdity(params: String): true | undefined;
}
