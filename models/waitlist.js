"use strict";

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Waitlist extends Model {
    static associate(models) {
      // Associations (if needed in future)
    }
  }

  Waitlist.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },

      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },

      notificationSent: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
        field: "notification_sent",
      },

      notifiedAt: {
        type: DataTypes.DATE,
        allowNull: true,
        field: "notifiedAt",
      },
    },
    {
      sequelize,
      modelName: "Waitlist",
      tableName: "waitlists",
      timestamps: true,
    },
  );

  return Waitlist;
};
