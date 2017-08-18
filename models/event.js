module.exports = function(sequelize, DataTypes) {
    var Event = sequelize.define("Event", {

        eventname: DataTypes.STRING,

        winningteam: DataTypes.STRING,

        complete: DataTypes.BOOLEAN,

        coursename: DataTypes.STRING,

        date: DataTypes.STRING,

        time: DataTypes.STRING,

        numofteams: DataTypes.INTEGER,

        numofplayerperteam: DataTypes.INTEGER

    });

    Event.associate = function(models) {

        Event.hasMany(models.PlayerToEvent);

    };
    return Event;
}