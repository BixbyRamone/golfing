module.exports = function(sequelize, Datatypes) {

    var Team = sequelize.define("Team", {

        teamname: {
            type: Datatypes.STRING
        }

    });

    Team.associate = function(models) {

        Team.hasMany(models.Player);
    };

    return Team;
};