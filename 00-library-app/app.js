require("dotenv").config();

const mongoose = require("mongoose");
const erv = require("express-react-views");

const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const booksRouter = require("./routes/booksRouter");
const authorsRouter = require("./routes/authorsRouter");
const reviewsRouter = require("./routes/reviewsRouter");
const bodyParser = require("body-parser"); // <== REQUIRE `body-parser`

//Connection to DB
const DB_NAME = "library";
const DB_CONN_STR = `mongodb://localhost:27017/${DB_NAME}`;
mongoose
  .connect(DB_CONN_STR, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then((x) => {
    console.log(`Connected to DB ${DB_NAME}`);
  })
  .catch((err) => {
    console.log(`Error connectiong to DB ${DB_NAME}`, err);
  });

// CREATING SERVER
const app = express();

//SETUP VIEW ENGINE
app.set("views", __dirname + "/views");
app.set("view engine", "jsx");
app.engine("jsx", erv.createEngine());

//MIDDLEWARE

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false })); // <== ADD

// parse application/json
app.use(bodyParser.json()); // <== ADD
// ROUTES

app.use("/books", booksRouter);

app.use("/authors", authorsRouter);

app.use("/reviews", reviewsRouter);

app.get("/", (req, res, next) => {
  res.render("Home");
});

//EXPORTING APP
module.exports = app;
