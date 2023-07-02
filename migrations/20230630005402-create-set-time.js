'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('set_times', {
      set_time_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      event_id: {
        type: Sequelize.SMALLINT,
        allowNull: false
      },
      stage_id: {
        type: Sequelize.SMALLINT,
        allowNull: false
      },
      band_id: {
        type: Sequelize.SMALLINT,
        allowNull: false
      },
      start_time: {
        type: Sequelize.DATE,
        allowNull: false
      },
      end_time: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('set_times');
  }
};