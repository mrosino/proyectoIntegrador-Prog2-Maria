const http = require("http");
const db = require("./database/models");
var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var session = require("express-session");

var ramoRouter = require("./routes/ramo");
var userRamoRouter = require("./routes/userRamo");
var productRouter = require("./routes/product");
var securityRouter = require("./routes/security");
var app = express();

const hostname = "127.0.0.1";
const port = 3000;

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// Habilitamos a express a usar sesiones (req.session.abc)

const publicRoutes = [
  "/ramo/register",
  "ramo/login",
];

const privateRoutes = [
  "/ramo/productAdd",
  "/ramo/emailEdit",
  "/ramo/pssEdit",
  "/ramo/productEdit",
  "/products/productDelete",
  "/products/commentAdd",
  "/products/commentDelete", //poner aca todas las rutas a las que no quiero que acceda alguien que no está logueado
];
app.use(
  session({
    secret: "ramo",
    resave: false,
    saveUninitialized: true,
    cookie: {
      httpOnly: true,
      maxAge: 1 * 60 * 60 * 1000,
    },
  })
);

app.use(function (req, res, next) {
  if (req.session.user != null) {
    res.cookie("loggedIn", "logged", { maxAge: 5000 * 60 });
    res.locals = {
      user: req.session.user,
      logged: req.session.logged,
    };
  } else {
    res.locals.logged = false;
    if (privateRoutes.includes(req.path)) {
      return res.redirect("/ramo/login");
    }
  }
  next();
});

app.use(async (req, res, next) => {
  if (req.cookies.remembered != undefined && res.locals.logged == undefined) {
    let user = await db.Users.findByPK(req.cookies.remembered);

    req.session.user = user;
    req.session.logged = true;
  }
  return next();
});

// error handler

app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});
app.listen(3000);

module.exports = app;

app.use("/ramo", ramoRouter);
app.use("/ramo", userRamoRouter);
app.use("/ramo", productRouter);
app.use("/ramo", securityRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});
