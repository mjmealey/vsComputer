import ChessBoard from "../vsComputer/modules/ChessBoard";
import { getCellIds } from "../vsComputer/modules/ChessBoard";

describe('ChessBoard', () => {
    const originalGetElementById = document.getElementById
    beforeAll(() => {
        document.getElementById = jest.fn(id => ({ appendChild: jest.fn(), classList: { add: jest.fn()}}))
    })

    afterAll(() => {
        document.getElementById = originalGetElementById
    })

    it("should create a 8 x 8 chessboard with a total of 64 cells", () => {
        const chessBoard = ChessBoard()
        chessBoard.createChessBoard()
        
        const expectedCellCount = 64
        expect(getCellIds).toHaveLength(expectedCellCount)
    }) 
});