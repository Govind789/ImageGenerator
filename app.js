require("dotenv").config();
const express = require("express");
const cors = require("cors");

const imageRouter = require("./routes/imageRouter.js");
const authRouter = require("./routes/authRoutes.js");
const historyRouter = require("./routes/historyRoutes.js");
const jwt = require("jsonwebtoken");
const app = express();

app.use(cors({ origin: true }));
app.use(express.json());

app.use("/api/v1/auth", authRouter);

app.use((req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer ")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }
  try {
    jwt.verify(token, process.env.SECRET, (err, decoded) => {
      if (err) {
        console.error("Token verification failed:", err.message);
      } else {
        app.use("/api/v1/history",token, historyRouter);
        console.log("Decoded token:", decoded);
      }
    });

    next();
  } catch (err) {
    return res.status(401).json({
      status: "fail",
      message: "Login required",
    });
  }
});

app.use("/api/v1/images", imageRouter);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("imageGenerator/build"));

  const path = require("path");

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "imageGenerator/build/index.html"));
  });
}

module.exports = app;
