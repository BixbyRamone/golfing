module.exports = function(sequelize, Datatypes) {
	var Player = sequelize.define("Player", {

		playername: {
			type: Datatypes.STRING
		},
		email: {
			type: Datatypes.STRING
		},
		password: {
			type: Datatypes.STRING
		}
	});

	Player.associate = function(models) {

		Player.hasMany(models.PlayerToEvent);

	}

	return Player;
}