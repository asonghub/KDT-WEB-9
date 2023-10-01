const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 8000;
const db = require("./models");

app.use(cors());
// app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const router = require("./routes/main");
app.use("/", router);

// app.use("*", (req, res) => {
//   res.render("404");
// });

db.sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
  });
});
