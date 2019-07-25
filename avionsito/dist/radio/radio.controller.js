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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const radio_service_1 = require("./radio.service");
let RadioController = class RadioController {
    constructor(_radioService) {
        this._radioService = _radioService;
        this.datosRadioaltimetro = {
            paquete: [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0]
        };
    }
    create() {
        return __awaiter(this, void 0, void 0, function* () {
            const radioCrear = yield this._radioService.crear(5, 8);
            return radioCrear;
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const todosLosRadios = yield this._radioService.buscarTodos();
            return todosLosRadios;
        });
    }
    crearRandomicosRadioaltímetro(max, min) {
        let paso;
        for (paso = 0; paso < 10; paso++) {
            this.datosRadioaltimetro.paquete[paso] = Math.round(Math.random() * (max - min) + min);
        }
    }
};
__decorate([
    common_1.Get('crear'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RadioController.prototype, "create", null);
__decorate([
    common_1.Get('r'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RadioController.prototype, "findAll", null);
RadioController = __decorate([
    common_1.Controller('radio'),
    __metadata("design:paramtypes", [radio_service_1.RadioService])
], RadioController);
exports.RadioController = RadioController;
//# sourceMappingURL=radio.controller.js.map