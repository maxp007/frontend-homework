'use strict';

const isInt = (a) => {
	if (a !== a || a != parseInt(a, 10)) {

		return false;
	}
	return true;
}

const tree = (N) => {
	if (!isInt(N) || N < 3) {
		return null;
	}

	let res = '';
	let spaces = '';

	for (let level = 0; level < N - 1; level++) {
		spaces = ' '.repeat(N - 2 - level);
		res = res.concat(spaces, '*'.repeat(2 * level + 1), spaces, '\n');
	}
	spaces = ' '.repeat(N - 2);
	return res.concat(spaces, '|', spaces, '\n');
};