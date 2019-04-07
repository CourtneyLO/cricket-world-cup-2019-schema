const fs = require('fs');

const writeToFile = (filePath, content) =>
	fs.writeFileSync(filePath, JSON.stringify(content, null, 2) + '\n', 'utf8');

module.exports = { writeToFile };
