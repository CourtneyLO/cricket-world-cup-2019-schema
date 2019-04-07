const { writeToFile } = require('../lib/write-to-file');

const getGames = games => {
	return Object.entries(games).reduce((object,[timeOfDay, game]) => {
		object[`${timeOfDay}`] = Object.assign({}, {
			time: game.time,
			teams: game.teams,
			ground: game.ground,
			location: game.location
		});

		return object;
	}, {});
};

const dateFixturesSetup = (timestamps, path) => {

	const allFixtures = timestamps.map(match => {
		return Object.assign({}, {
			date: match.date,
			numberOfMatches: match.numberOfMatches,
			games: getGames(match.games)
		});
	});

	writeToFile(path, allFixtures);
};


module.exports = dateFixturesSetup;
