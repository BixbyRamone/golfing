var db = require("../models/index.js");

module.exports = function(app) {

	app.post("/api/newEvent", function(req, res){

		db.Event.create({
			eventname: req.body.eventname,
			coursename: req.body.coursename,
			date: req.body.date,
			time: req.body.time,
			numofteams: numofteams,
			numofplayerperteam: req.body.numofplayerperteam
		})
	})
}