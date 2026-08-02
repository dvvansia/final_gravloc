"use strict";

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class SupplierWaitlist extends Model {
    static associate(models) {
      // Associations (if needed in future)
    }
  }

  SupplierWaitlist.init(
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

      notification_sent: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
        field: "notification_sent",
      },

      notified_at: {
        type: DataTypes.DATE,
        allowNull: true,
        field: "notified_at",
      },
    },
    {
      sequelize,
      modelName: "SupplierWaitlist",
      tableName: "SupplierWaitlist",
      timestamps: true,
    },
  );

  return SupplierWaitlist;
};
