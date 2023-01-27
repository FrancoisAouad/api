"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
class App {
    constructor(controllers) {
        this.app = (0, express_1.default)();
        this.initializeMiddlewares();
        this.initializeControllers(controllers);
    }
    listen() {
        this.app.listen(8001, () => {
            console.log('server listening on port 8001');
        });
    }
    initializeMiddlewares() {
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: true }));
    }
    initializeControllers(controllers) {
        controllers.forEach((controller) => {
            this.app.use('/api', controller.router);
        });
    }
}
exports.default = App;
