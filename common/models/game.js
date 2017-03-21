'use strict';

module.exports = function(Game) {

	Game.newGame = function(year, callback) {
		var app = Game.app;

		Game.create({
		  "BritishResources": 5,
		  "PatriotResources": 2,
		  "IndianResources": 0,
		  "FrenchResources": 5,
		  "CumulativeBritishCasualties": 1,
		  "CumulativeRebellionCasualties": 3,
		  "BritishBrilliantStrokeAvailable": true,
		  "PatriotBrilliantStrokeAvailable": true,
		  "IndianBrilliantStrokeAvailable": true,
		  "FrenchBrilliantStrokeAvailable": true,
		  "FrenchTreatyOfAllianceAvailable": true
		}, function(err, obj) {

			let spaceData = [
				{name: "Quebec City", pop: 1, type: "city", "britishRegulars": 1, "britishTories": 1, "supportLevel": 1},
				{name: "New York City", pop: 2, type: "city", "britishRegulars": 6, "britishForts": 1, "patriotContinentals": 1, "supportLevel": 1},
				{name: "Philadelphia", pop: 1, type: "city", "patriotMilitiaUnderground": 1},
				{name: "Norfolk", pop: 1, type: "city"},
				{name: "Charles Town", pop: 1, type: "city", "patriotContinentals": 2, "patriotForts": 1},
				{name: "Savannah", pop: 1, type: "city"},
				{name: "Boston", pop: 1, type: "city", "supportLevel": -1},

				{name: "Quebec", pop: 0, type: "indianReserve", "britishForts": 1, "britishRegulars": 1, "britishTories": 1, "britishForts": 1, "patriotMilitiaUnderground": 1, "indianWarPartiesUnderground": 1, "indianVillages": 1},
				{name: "Northwest", pop: 0, type: "indianReserve", "indianWarPartiesUnderground": 1},
				{name: "Southwest", pop: 0, type: "indianReserve", "indianWarPartiesUnderground": 1, "indianVillages": 1},
				{name: "Florida", pop: 0, type: "indianReserve", "britishForts": 1, "britishRegulars": 1, "indianWarPartiesUnderground": 2},

				{name: "New York", pop: 2, type: "colony", "britishRegulars": 3, "britishTories": 3, "patriotContinentals": 3, "indianWarPartiesUnderground": 2},
				{name: "New Hampshire", pop: 1, type: "colony"},
				{name: "Connecticut - Rhode Island", pop: 2, type: "colony"},
				{name: "New Jersey", pop: 1, type: "colony"},
				{name: "Maryland - Delaware", pop: 2, type: "colony"},
				{name: "Pennsylvania", pop: 2, type: "colony"},
				{name: "Virginia", pop: 2, type: "colony", "britishTories": 2},
				{name: "North Carolina", pop: 2, type: "colony", "patriotContinentals": 1, "patriotMilitiaUnderground": 1, "indianWarPartiesUnderground": 1},
				{name: "South Carolina", pop: 2, type: "colony", "britishTories": 2},
				{name: "Georgia", pop: 1, type: "colony", "patriotMilitiaUnderground": 1},
				{name: "Massachusetts", pop: 2, type: "colony", "supportLevel": -2, "patriotContinentals": 1, "patriotMilitiaUnderground": 1, "patriotForts": 1},

				{name: "West Indies", pop: 0, type: "holdingBox"},

				{name: "Available", pop: 0, type: "special", "britishRegulars": 7, "britishTories": 10, "britishForts": 3, "patriotContinentals": 12, "patriotMilitiaUnderground": 10, "patriotForts": 4, "frenchRegulars": 6, "indianWarPartiesUnderground": 7, "indianVillages": 10},
				{name: "Unavailable", pop: 0, type: "special", "britishRegulars": 6, "britishTories": 6, "frenchRegulars": 9},
				{name: "Casualties", pop: 0, type: "special"}
			];

			for (let i = 0; i<spaceData.length; i++) {
				let spaceDatum = spaceData[i];

				app.models.Space.create({
				  "name": spaceDatum.name,
				  "type": spaceDatum.type,
				  "population": spaceDatum.pop,
				  "supportLevel": spaceDatum.supportLevel,
				  "britishForts": spaceDatum.britishForts,
				  "britishRegulars": spaceDatum.britishRegulars,
				  "britishTories": spaceDatum.britishTories,
				  "patriotForts": spaceDatum.patriotForts,
				  "patriotContinentals": spaceDatum.patriotContinentals,
				  "patriotMilitiaUnderground": spaceDatum.patriotMilitiaUnderground,
				  "frenchRegulars": spaceDatum.frenchRegulars,
				  "indianVillages": spaceDatum.indianVillages,
				  "indianWarPartiesUnderground": spaceDatum.indianWarPartiesUnderground,
				  "gameId": obj.id
				});
			}

			Game.findById(obj.id, {"include": "spaces"}, function(err, obj) {
				callback(null, obj);
			});
		});
	};

	Game.remoteMethod("newGame", {
		accepts: {arg: "year", type: "string"},
		returns: {arg: "game", type: "Object"},
		http: {path: '/newGame', verb: 'post'},
	});

};
