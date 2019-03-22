// https://jestjs.io/docs/en/using-matchers
const sum = require('../public/js/sum');

test('This is a sample', () => {
	expect(sum(1,2)).toBe(3);
});