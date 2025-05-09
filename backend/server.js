require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
app.use(
    cors({
        origin: "http://localhost:3000",
        credentials: true
    })
)
app.use(express.json());
app.use(cookieParser());
const userRoutes = require("./routes/user");
app.use("/user", userRoutes);

const notesHistoryRoutes = require("./routes/notesHistory");
app.use("/notes", notesHistoryRoutes);

app.listen(process.env.PORT);