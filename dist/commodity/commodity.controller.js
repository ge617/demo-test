"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommodityController = void 0;
const common_1 = require("@nestjs/common");
const commodity_service_1 = require("./commodity.service");
let CommodityController = class CommodityController {
    commit;
    constructor(commit) {
        this.commit = commit;
    }
    returnResult = { code: '', msg: '', data: {} };
    async getCommodity(param) {
        const result = this.commit.getCommodity(param);
        this.returnResult.code = "200";
        this.returnResult.msg = "请求成功";
        this.returnResult.data = result;
        return this.returnResult;
    }
    async addCommodity(param) {
        param.id = Math.random() * 10000 + '-' + Math.random() * 20000;
        return this.commit.addCommodity(param);
    }
    async editCommidty(param) {
        return this.commit.editCommdity(param);
    }
    async deleteCommidty(param) {
        return this.commit.deleteCommdity(param.id);
    }
};
exports.CommodityController = CommodityController;
__decorate([
    (0, common_1.Get)('pageCommodity.do'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CommodityController.prototype, "getCommodity", null);
__decorate([
    (0, common_1.Post)('addCommodity.do'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CommodityController.prototype, "addCommodity", null);
__decorate([
    (0, common_1.Post)('editCommidity.do'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CommodityController.prototype, "editCommidty", null);
__decorate([
    (0, common_1.Post)("deleteCommidity.do"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CommodityController.prototype, "deleteCommidty", null);
exports.CommodityController = CommodityController = __decorate([
    (0, common_1.Controller)('commodity'),
    __metadata("design:paramtypes", [commodity_service_1.CommodityService])
], CommodityController);
//# sourceMappingURL=commodity.controller.js.map