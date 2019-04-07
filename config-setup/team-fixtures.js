const { writeToFile } = require('../lib/write-to-file')

const getOpposition = (teamName, fixtures, teamList) => {

	return fixtures.reduce((allMatches, fixture) => {
	 	const match =  Object.values(fixture.games).find((match) => {
			return match.teams.includes(teamName);
		});

		if (match) {
			const opposition = match.teams.find(team => team !== teamName);
			const flag = teamList.find(team => team.name === opposition).flag;
			const date = `${fixture.date} ${match.time}`;
			const timestamps = new Date(date);

			const oppositionStructure = Object.assign({}, {
				name: opposition,
				flag,
				timestamps,
				ground: match.ground,
				location: match.location
			});

			allMatches.push(oppositionStructure);
		}

		return allMatches;
	}, []);
};

const teamFixtures = (teamList, fixtures, path) => {
	const allFixtures =  teamList.map(team => {
		return Object.assign({}, {
			name: team.name,
			flag: team.flag,
			opposition: getOpposition(team.name, fixtures, teamList)
		});
	});

	return writeToFile(path, allFixtures);
};

module.exports = teamFixtures;
