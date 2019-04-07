const { expect } = require('chai');

const { writeToFile } = require('../../lib/write-to-file');
const expectedResult = require('../fixtures/expected-test-result');
const receivedResult = require('../fixtures/received-test-result');

describe('write to file', () => {
	const filePath = '/Users/courtney.osborn/Development/own-projects/cricket-world-cup/test/fixtures/received-test-result.json';
	const content = [{ name: 'test'}];

	it('returns content written to file', () => {
		writeToFile(filePath, content);
		expect(receivedResult).to.eql(expectedResult);
	});

});
