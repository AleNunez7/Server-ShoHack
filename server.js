require("dotenv").config();
const express = require("express");
const app = express();
const routes = require("./routes/index");
const port = 8000;
const mongoose = require("./config/connection"); // Se conecta el mongo
const cors = require("cors");
app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

routes(app);

app.listen(port);
