const { Sequelize } = require("sequelize");
require("dotenv").config();

let sequelize;

if (process.env.DATABASE_URL) {
  // Production: Use Render PostgreSQL with SSL
  sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: "postgres",
    logging: false,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false, // Required for Render's SSL certificate
      },
    },
  });
} else {
  // Development: Use local PostgreSQL from config.json
  const config = require("./config.json");
  const env = process.env.NODE_ENV || "development";
  const dbConfig = config[env];

  sequelize = new Sequelize(
    dbConfig.database,
    dbConfig.username,
    dbConfig.password,
    {
      host: dbConfig.host,
      port: dbConfig.port,
      dialect: dbConfig.dialect,
      logging: false,
    }
  );
}

module.exports = sequelize;
