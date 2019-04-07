const fs = require('fs');

const writeToFile = (filePath, content) => console.log("filePath", filePath) ||
	fs.writeFileSync(filePath, JSON.stringify(content, null, 2) + '\n', 'utf8');

module.exports = { writeToFile };
