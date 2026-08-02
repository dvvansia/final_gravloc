const { Sequelize } = require("sequelize");
require("dotenv").config();

// ⚠️ FOR RENDER: Use DATABASE_URL from environment
const databaseUrl = process.env.DATABASE_URL;

console.log("🔍 DATABASE_URL exists:", !!databaseUrl);

if (databaseUrl) {
  console.log("✅ Using DATABASE_URL for connection");
  const sequelize = new Sequelize(databaseUrl, {
    dialect: "postgres",
    logging: false,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  });
  module.exports = sequelize;
} else {
  console.log("⚠️ DATABASE_URL not found, using config.json fallback");
  const config = require("./config.json");
  const env = process.env.NODE_ENV || "development";
  const dbConfig = config[env];

  const sequelize = new Sequelize(
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
  module.exports = sequelize;
}
