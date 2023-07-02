'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('bands', [{
      name: '3 Doors Down',
      genre: 'Alt Rock',
      available_start_time: '2023-05-01T12:00:00',
      end_time: '2023-09-30T12:00:00'
    }, {
      name: 'System of a Down',
      genre: 'Nu Metal',
      available_start_time: '2023-06-01T12:00:00',
      end_time: '2023-10-31T23:00:00'
    }, {
      name: 'AC/DC',
      genre: 'Classic Rock',
      available_start_time: '2023-04-01T12:00:00',
      end_time: '2023-08-15T12:00:00'
    }, {
      name: 'Tame Impala',
      genre: 'Psychedelic Rock',
      available_start_time: '2023-06-15T12:00:00',
      end_time: '2023-09-30T12:00:00'
    }, {
      name: 'Massive Attack',
      genre: 'Trip-Hop',
      available_start_time: '2023-07-15T12:00:00',
      end_time: '2023-08-05T12:00:00'
    }, {
      name: 'Blink-182',
      genre: 'Punk Rock',
      available_start_time: '2023-05-01T12:00:00',
      end_time: '2023-10-31T12:00:00'
    }, {
      name: 'Yawning Man',
      genre: 'Desert Rock',
      available_start_time: '2023-05-01T12:00:00',
      end_time: '2023-09-30T12:00:00'
    }, {
      name: 'Pink Floyd',
      genre: 'Classic Rock',
      available_start_time: '2023-05-01T12:00:00',
      end_time: '2023-09-30T12:00:00'
    }, {
      name: 'One Republic',
      genre: 'Pop',
      available_start_time: '2023-05-01T12:00:00',
      end_time: '2023-09-30T12:00:00'
    }, {
      name: 'Nirvana',
      genre: 'Rock',
      available_start_time: '2023-05-01T12:00:00',
      end_time: '2023-09-30T12:00:00'
    }, {
      name: 'Cold Play',
      genre: 'Pop',
      available_start_time: '2023-05-01T12:00:00',
      end_time: '2023-09-30T12:00:00'
    }, {
      name: 'The Beatles',
      genre: 'Rock',
      available_start_time: '2023-05-01T12:00:00',
      end_time: '2023-09-30T12:00:00'
    }, {
      name: 'Destiny Child',
      genre: 'Pop',
      available_start_time: '2023-05-01T12:00:00',
      end_time: '2023-09-30T12:00:00'
    }, {
      name: 'Jackson 5',
      genre: 'R&B',
      available_start_time: '2023-05-01T12:00:00',
      end_time: '2023-09-30T12:00:00'
    }, {
      name: 'The Isley Brothers',
      genre: 'R&B',
      available_start_time: '2023-05-01T12:00:00',
      end_time: '2023-09-30T12:00:00'
    }, {
      name: 'One Direction',
      genre: 'Pop',
      available_start_time: '2023-05-01T12:00:00',
      end_time: '2023-09-30T12:00:00'
    }, {
      name: 'Britney Spears',
      genre: 'Pop',
      available_start_time: '2023-05-01T12:00:00',
      end_time: '2023-09-30T12:00:00'
    }, {
      name: 'Taylor Swift',
      genre: 'Pop',
      available_start_time: '2023-05-01T12:00:00',
      end_time: '2023-09-30T12:00:00'
    }, {
      name: 'Weird Al Yankovic',
      genre: 'Pop',
      available_start_time: '2023-05-01T12:00:00',
      end_time: '2023-09-30T12:00:00'
    }, {
      name: 'Black Sabbath',
      genre: 'Rock',
      available_start_time: '2023-05-01T12:00:00',
      end_time: '2023-09-30T12:00:00'
    }, {
      name: 'Immortal Technique',
      genre: 'Hip-Hop',
      available_start_time: '2023-05-01T12:00:00',
      end_time: '2023-09-30T12:00:00'
    }, {
      name: 'Paramore',
      genre: 'Pop',
      available_start_time: '2023-05-01T12:00:00',
      end_time: '2023-09-30T12:00:00'
    }, {
      name: 'Rihanna',
      genre: 'Pop',
      available_start_time: '2023-05-01T12:00:00',
      end_time: '2023-09-30T12:00:00'
    }, {
      name: 'Yungblud',
      genre: 'Pop',
      available_start_time: '2023-05-01T12:00:00',
      end_time: '2023-09-30T12:00:00'
    }, {
      name: 'Barney',
      genre: 'Children',
      available_start_time: '2023-05-01T12:00:00',
      end_time: '2023-09-30T12:00:00'
    }, {
      name: 'The Wiggles',
      genre: 'Children',
      available_start_time: '2023-05-01T12:00:00',
      end_time: '2023-09-30T12:00:00'
    }, {
      name: 'Iration',
      genre: 'Reggae',
      available_start_time: '2023-05-01T12:00:00',
      end_time: '2023-09-30T12:00:00'
    }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('bands', null, {});
  }
};