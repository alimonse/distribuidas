"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const typeorm_1 = require("@nestjs/typeorm");
const radio_entity_1 = require("./radio/radio.entity");
const radio_module_1 = require("./radio/radio.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: '31.220.105.85',
                port: 3306,
                username: 'mantic99_ali',
                password: 'root1234*',
                database: 'mantic99_alimonse',
                entities: [
                    radio_entity_1.RadioEntity,
                ],
                synchronize: true,
                retryDelay: 40000,
                retryAttempts: 3,
                connectTimeout: 40000,
                keepConnectionAlive: true,
                dropSchema: false,
                charset: 'utf8mb4',
                timezone: 'local',
                ssl: false,
            }),
            radio_module_1.RadioModule
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map