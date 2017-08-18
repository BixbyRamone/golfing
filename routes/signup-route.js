var db = require("../models/index.js");

module.exports = function(app) {

	app.post("api/signup", function(req, res) {

		db.Player.create({
			playername: req.body.playername,
			email: req.body.email,
			password: req.body.password
		})
	})
}