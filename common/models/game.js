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

			let spaceData = [
				{name: "Quebec City", pop: 1, type: "city"},
				{name: "New York City", pop: 2, type: "city"},
				{name: "Philadelphia", pop: 1, type: "city"},
				{name: "Norfolk", pop: 1, type: "city"},
				{name: "Charles Town", pop: 1, type: "city"},
				{name: "Savannah", pop: 1, type: "city"},
				{name: "Boston", pop: 1, type: "city"},

				{name: "Quebec", pop: 0, type: "indianReserve"},
				{name: "Northwest", pop: 0, type: "indianReserve"},
				{name: "Southwest", pop: 0, type: "indianReserve"},
				{name: "Florida", pop: 0, type: "indianReserve"},

				{name: "New York", pop: 2, type: "colony"},
				{name: "New Hampshire", pop: 1, type: "colony"},
				{name: "Connecticut - Rhode Island", pop: 2, type: "colony"},
				{name: "New Jersey", pop: 1, type: "colony"},
				{name: "Maryland - Delaware", pop: 2, type: "colony"},
				{name: "Pennsylvania", pop: 2, type: "colony"},
				{name: "Virginia", pop: 2, type: "colony"},
				{name: "North Carolina", pop: 2, type: "colony"},
				{name: "South Carolina", pop: 2, type: "colony"},
				{name: "Georgia", pop: 1, type: "colony"},
				{name: "Massachusetts", pop: 2, type: "colony"},

				{name: "West Indies", pop: 0, type: "holdingBox"},

				{name: "Available", pop: 0, type: "special"},
				{name: "Unavailable", pop: 0, type: "special"},
				{name: "Casualties", pop: 0, type: "special"}
			];

			for (let i = 0; i<spaceData.length; i++) {
				let spaceDatum = spaceData[i];

				app.models.Space.create({
				  "name": spaceDatum.name,
				  "type": spaceDatum.type,
				  "population": spaceDatum.pop,
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
