"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.controller = void 0;
const express_1 = __importDefault(require("express"));
const auth_services_1 = require("./auth.services");
const service = new auth_services_1.Service();
class controller {
    constructor() {
        this.router = express_1.default.Router();
        this.path = '/register';
        this.initializeRoutes();
    }
    register(req, res, next) {
        try {
            const result = service.register(req.body);
            res.status(200).send({ data: result });
        }
        catch (error) {
            console.log({ err: error });
        }
    }
    initializeRoutes() {
        this.router.post(`${this.path}`, this.register);
    }
}
exports.controller = controller;
