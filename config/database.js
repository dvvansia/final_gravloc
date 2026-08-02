// src/config/database.js
require('dotenv').config();

module.exports = {
  development: {
    // Your local settings can stay the same
    username: process.env.DB_USER || "postgres",
    password: process.env.DB_PASSWORD || "password",
    database: process.env.DB_NAME || "gravloc",
    host: "127.0.0.1",
    dialect: "postgres"
  },
  production: {
    // This tells Sequelize to use the URL provided by Render
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false // Required by Render PostgreSQL
      }
    }
  }
};
