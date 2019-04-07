const { expect } = require('chai');

const teamFixtures = require('../../config-setup/team-fixtures');
const dateTime = require('../../config/date-fixtures.json');
const teams = require('../../config/teams.json');
const expectedResult = require('../fixtures/expected-result');

describe('teamFixtures', () => {
	it('return fixtures structure based on the team', () => {
		const path = '/Users/courtney.osborn/Development/own-projects/cricket-world-cup/config/team-fixtures.json';
		expect(teamFixtures(teams, dateTime, path)).to.eql(expectedResult.fixtures);
	});
});
