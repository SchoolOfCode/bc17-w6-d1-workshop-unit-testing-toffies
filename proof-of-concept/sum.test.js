import { test, expect} from 'vitest'

import sum from './sum.js'

test('basic sum test', () => {
    expect(sum(5,7)).toEqual(12);
});