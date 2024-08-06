import { test, expect} from 'vitest'
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
} from '/app.js';



test('r + p', () => {
    expect(calculateRoundResult(ROCK, PAPER)).toEqual({
        outcome: LOSS,
        message: "Player chose rock and computer chose paper. Computer wins.",
      });
});

//ERROR TEST 
// you must wrap the error in a function to catch the error
test('banana + p', () => {
    expect(() => calculateRoundResult('banana', PAPER)).toThrow(
       'Invalid player move (banana) or computer move (paper)'
    );
});

//NOT THIS BELLOW 
// //test('banana + p', () => {
//     expect(calculateRoundResult('banana', PAPER)).toEqual(
//         'Invalid player move (banana) or computer move (paper)'
//      );
//  });
 