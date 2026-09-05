'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const process = require('process');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const db = {};

let sequelize;

// ✅ PRIORITY 1: Use DATABASE_URL if available (Neon + Render)
if (process.env.DATABASE_URL) {
  console.log('🔍 [MODELS] Using DATABASE_URL for connection');
  sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    logging: false,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
    pool: {
      max: 2,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  });
} else {
  // ✅ FALLBACK: Use config.json for local development
  console.log('⚠️ [MODELS] DATABASE_URL not found, using config.json fallback');
  const config = require(__dirname + '/../config/config.json')[env];
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
 .readdirSync(__dirname)
 .filter(file => {
    return (
      file.indexOf('.')!== 0 &&
      file!== basename &&
      file.slice(-3) === '.js' &&
      file.indexOf('.test.js') === -1
    );
  })
 .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

console.log("Loaded models:", Object.keys(db));

// ✅ AUTO-CREATE TABLES IN NEON (Fixes "relation does not exist")
db.sequelize.sync({ alter: true }).then(() => {
  console.log("✅ Tables synced in Neon: SupplierWaitlist, Waitlist");
}).catch(err => {
  console.error("❌ Sync failed:", err.message);
});

module.exports = db;
