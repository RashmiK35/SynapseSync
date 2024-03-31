import express from "express";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.routes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";

const app = express();

dotenv.config();

app.use(express.json());            //to parse the incoming requests with JSON payloads (fron req.body)

app.use("/api/auth",authRoutes);

const PORT = process.env.PORT || 5000;

/*app.get("/", (req, res) => {
    //root route hhtp://localhost:5000/
    res.send("Hello World!!");
});*/

app.listen(PORT, () => {
    connectToMongoDB();
    console.log(`Server Running on port ${PORT}`)
});