import { test, expect} from 'vitest'

import { calculate } from './calculator'

test('calculate + test', () => {
    expect(calculate('+', 9, 10)).toEqual(19);
});

test('calculate pizza test', () => {
    expect(calculate('🍕', 9, 10)).toEqual(81);
});

test('calculate * test', () => {
    expect(calculate('*', -6, -8)).toEqual(48);
});

test('calculate sq test', () => {
    expect(calculate('sq', 3, 44)).toEqual(9);
});


/* ```js
* calculate('+', 9, 10); // should return 19
* calculate('-', 4, 6); // should return -2
* calculate('*', -6, -8); // should return 48
* calculate('/', 121, 11); // should return 11
* calculate('sq', 5); // should return 25
* calculate('sq', 3, 44); // should return 9, as the 44 is ignored
* calculate('%', 124, 56); // should throw an error since '%' is not a supported operator
* calculate('🍕', -41414, 2); // should throw an error since '🍕' is not a supported operator
* ```
*/