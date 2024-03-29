'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING(128),
        allowNull: false
    },
    email: {
        type: Sequelize.STRING(70),
        allowNull: false,
        unique: true
    },
    username: {
        type: Sequelize.STRING(30),
        allowNull: false,
        unique: true
    },
    password: {
        type: Sequelize.STRING(256),
        allowNull: false,
    },
    createAT: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,   
     },
    updateAT: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,    
    }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};