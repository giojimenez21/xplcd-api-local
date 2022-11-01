"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.odooClient = void 0;
const axios_1 = __importDefault(require("axios"));
exports.odooClient = axios_1.default.create({
    baseURL: process.env.BASEURL,
    headers: {
        'Content-type': 'application/json'
    }
});