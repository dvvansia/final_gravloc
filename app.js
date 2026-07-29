const express = require("express");
const path = require("path");

const app = express();

// Body Parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Landing page
app.get("/", (req, res) => {
  res.render("index");
});

// Waitlist / "buyer workspace in development" page
app.get("/waitlist", (req, res) => {
  res.render("waitlist");
});

// Old dashboard links redirect to the waitlist page since the real
// dashboard isn't built yet — keeps any existing bookmarks/links working
app.get("/dashboard", (req, res) => {
  res.redirect("/waitlist");
});

// Suppliers page
app.get("/supplier", (req, res) => {
  res.render("supplier");
});

const waitlistRoutes = require("./modules/waitlist/waitlist.routes");

app.use("/api/waitlist", waitlistRoutes);

module.exports = app;
