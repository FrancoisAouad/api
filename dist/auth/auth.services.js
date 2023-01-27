"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Service = void 0;
const fs_1 = __importDefault(require("fs"));
class Service {
    constructor() {
    }
    register(body) {
        const objectToSet = {
            username: body.username,
            email: body.email,
            name: body.name,
            password: body.password,
            firstName: body.firstName,
            lastName: body.lastName,
            mobileNumber: body.mobileNumber,
            country: body.country,
            gender: body.gender,
            dateOfBirth: body.dateOfBirth,
            nationality: body.nationality,
            language: body.language,
            accessType: body.accessType,
            loginType: body.loginType,
            id: body.id
        };
        const fileName = this.generateRandom8Bit().toString();
        const file = `src/db/${fileName}.json`;
        fs_1.default.writeFile(file, JSON.stringify(objectToSet), (err) => {
            if (err) {
                console.error(err);
            }
        });
        const token = this.generateRandom8Bit().toString();
        return {
            serverDate: new Date(),
            message: 'success',
            result: {
                verificationToken: token
            }
        };
    }
    generateRandom8Bit() {
        return Math.floor(Math.random() * 256).toString(2).padStart(8, '0');
    }
}
exports.Service = Service;
