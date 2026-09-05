"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Waitlist extends Model {}

  Waitlist.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: { isEmail: true },
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
        field: "notified_at",
      },
    },
    {
      sequelize,
      modelName: "Waitlist",
      tableName: "waitlists", // <-- lowercase = no more relation error
      timestamps: true,
    },
  );
  return Waitlist;
};
