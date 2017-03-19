'use strict';

module.exports = function(Game) {

	Game.newGame = function(year, callback) {
		var app = Game.app;

		Game.create({
		  "BritishResources": 0,
		  "PatriotResources": 0,
		  "IndianResources": 0,
		  "FrenchResources": 0,
		  "CumulativeBritishCasualties": 0,
		  "CumulativeRebellionCasualties": 0,
		  "BritishBrilliantStrokeAvailable": true,
		  "PatriotBrilliantStrokeAvailable": true,
		  "IndianBrilliantStrokeAvailable": true,
		  "FrenchBrilliantStrokeAvailable": true,
		  "FrenchTreatyOfAllianceAvailable": true
		}, function(err, obj) {
			app.models.Space.create({
			  "name": "Quebec City",
			  "type": "city",
			  "population": 1,
			  "blockades": 0,
			  "propaganda": 0,
			  "raids": 0,
			  "britishForts": 0,
			  "britishRegulars": 0,
			  "britishTories": 0,
			  "patriotForts": 0,
			  "patriotCotinentals": 0,
			  "patriotMilitiaActive": 0,
			  "patriotMilitiaUnderground": 0,
			  "frenchRegulars": 0,
			  "indianVillages": 0,
			  "indianWarPartiesActive": 0,
			  "indianWarPartiesUnderground": 0,
			  "supportLevel": 0,
			  "gameId": obj.id
			});

			app.models.Space.create({
			  "name": "New York City",
			  "type": "city",
			  "population": 2,
			  "blockades": 0,
			  "propaganda": 0,
			  "raids": 0,
			  "britishForts": 0,
			  "britishRegulars": 0,
			  "britishTories": 0,
			  "patriotForts": 0,
			  "patriotCotinentals": 0,
			  "patriotMilitiaActive": 0,
			  "patriotMilitiaUnderground": 0,
			  "frenchRegulars": 0,
			  "indianVillages": 0,
			  "indianWarPartiesActive": 0,
			  "indianWarPartiesUnderground": 0,
			  "supportLevel": 0,
			  "gameId": obj.id
			});

			app.models.Space.create({
			  "name": "Philadelphia",
			  "type": "city",
			  "population": 1,
			  "blockades": 0,
			  "propaganda": 0,
			  "raids": 0,
			  "britishForts": 0,
			  "britishRegulars": 0,
			  "britishTories": 0,
			  "patriotForts": 0,
			  "patriotCotinentals": 0,
			  "patriotMilitiaActive": 0,
			  "patriotMilitiaUnderground": 0,
			  "frenchRegulars": 0,
			  "indianVillages": 0,
			  "indianWarPartiesActive": 0,
			  "indianWarPartiesUnderground": 0,
			  "supportLevel": 0,
			  "gameId": obj.id
			});

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
