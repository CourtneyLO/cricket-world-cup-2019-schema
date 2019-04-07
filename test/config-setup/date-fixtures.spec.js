const { expect } = require('chai');

const dateFixturesSetup = require('../../config-setup/date-fixtures');
const dateTime = require('../../config/date-fixtures.json');
const expectedResult = require('../fixtures/expected-result');

describe('dateFixturesSetup', () => {
	it('allows for changes to be made to the date fixtures structure', () => {
		const path = '/Users/courtney.osborn/Development/own-projects/cricket-world-cup/config/date-fixtures.json';
		expect(dateFixturesSetup(dateTime, path)).to.eql(expectedResult.expectedResult);
	});
});
