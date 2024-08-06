import { test, expect } from "vitest";
import 'jest-extended'; 
import 'chai';
import {
  ROCK,
  PAPER,
  SCISSORS,
  DRAW,
  WIN,
  LOSS,
  calculateRoundResult,
  generateComputerMove,
  calculateNewScores,
} from "/app.js";

test("r + p", () => {
  expect(calculateRoundResult(ROCK, PAPER)).toEqual({
    outcome: LOSS,
    message: "Player chose rock and computer chose paper. Computer wins.",
  });
});

test("calc DRAW p1 c1 d0", () => {
  expect(
    calculateNewScores(
      {
        playerScoreCounter: 1,
        computerScoreCounter: 1,
        drawCounter: 0,
      },
      DRAW
    )
  ).toEqual({
    playerScoreCounter: 1,
    computerScoreCounter: 1,
    drawCounter: 1,
  });
});

test('gen move', () => {
    const possibleMoves = [ROCK, PAPER, SCISSORS];
    const move = generateComputerMove();
    expect(possibleMoves).toContain(move);
});

//ERROR TEST
// you must wrap the error in a function to catch the error
test("banana + p", () => {
  expect(() => calculateRoundResult("banana", PAPER)).toThrow(
    "Invalid player move (banana) or computer move (paper)"
  );
});

//NOT THIS BELLOW
// //test('banana + p', () => {
//     expect(calculateRoundResult('banana', PAPER)).toEqual(
//         'Invalid player move (banana) or computer move (paper)'
//      );
//  });
