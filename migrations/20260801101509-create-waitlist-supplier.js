"use strict";

/** @type {import("sequelize-cli").Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("SupplierWaitlist", {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },

      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },

      notification_sent: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },

      notified_at: {
        type: Sequelize.DATE,
        allowNull: true,
      },

      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },

      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable("SupplierWaitlist");
  },
};
