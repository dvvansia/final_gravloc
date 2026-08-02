require("dotenv").config(); // ✅ Must be first!

const app = require("./app");
const sequelize = require("./config/database");

const PORT = process.env.PORT || 3000;

async function startServer() {
  try {
    await sequelize.authenticate();
    console.log("✅ Database Connected");
    app.listen(PORT, () => {
      console.log(`🚀 Server running on ${PORT}`);
    });
  } catch (error) {
    console.error("Database Connection Failed", error);
  }
}

startServer();
