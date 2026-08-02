const { Sequelize } = require("sequelize");
require("dotenv").config();

let sequelize;

// Check if DATABASE_URL is provided
if (process.env.DATABASE_URL) {
  console.log("🔍 DATABASE_URL exists:", true);
  
  // Ensure SSL parameter is included
  let dbUrl = process.env.DATABASE_URL;
  if (!dbUrl.includes("ssl=true") && !dbUrl.includes("sslmode=require")) {
    const separator = dbUrl.includes("?") ? "&" : "?";
    dbUrl += `${separator}ssl=true`;
    console.log(`✅ Added ssl=true to DATABASE_URL`);
  }
  
  console.log(`✅ Using DATABASE_URL for connection`);
  
  sequelize = new Sequelize(dbUrl, {
    dialect: "postgres",
    logging: false,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  });
} else {
  console.log("⚠️ DATABASE_URL not found, using config.json fallback");
  
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
