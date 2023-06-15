"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chessBoard_js_1 = __importDefault(require("./chessBoard.js"));
const vsComputer = () => {
    const newChessBoard = (0, chessBoard_js_1.default)();
    newChessBoard.chessGame();
    newChessBoard.cellColors();
};
exports.default = vsComputer;
