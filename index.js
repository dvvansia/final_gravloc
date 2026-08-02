require("dotenv").config(); // ✅ Must be first!

const dns = require("dns");
dns.setDefaultResultOrder("ipv4first");

const app = require("./app");
const { sequelize } = require("./models");

const PORT = process.env.PORT || 3000;

async function startServer() {
  try {
    await sequelize.authenticate();
    console.log("✅ Database Connected");
    
    await sequelize.sync({ alter: true });
    console.log("✅ Database Synced");
    
    app.listen(PORT, () => {
      console.log(`🚀 Server running on ${PORT}`);
    });
  } catch (error) {
    console.error("Database Connection Failed", error);
  }
}

startServer();
