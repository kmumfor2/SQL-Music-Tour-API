'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Stage extends Model {
    static associate({ Event, StageEvent }) {
      // events
      Stage.belongsToMany(Event, {
        foreignKey: "stage_id",
        as: "events",
        through: StageEvent
      })
      // set times 
      Stage.hasMany(SetTime, {
        foreignKey: "stage_id",
        as: "set_times"
      })
    }
  }
  
  Stage.init({
    stage_id: DataTypes.INTEGER,
    stage_name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Stage',
  });
  return Stage;
};