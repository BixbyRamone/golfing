var db = require("../models/index.js");

module.exports = function(app) {

	app.get("/api/allGames", function(req, res) {

		db.Event.findAll({
			where: !req.complete
		});
	});

}