import express from "express";
import { CreateAccount, Login, UpdateProfile, Userprofile } from "./controllers/UserController";
import dotenv from "dotenv"
import { connectDB } from "./db";
import authentication from "./middleware/Authentication";
import cors from 'cors'

const PORT = process.env.PORT || 8080;

// database connection
dotenv.config();
connectDB();

// middleware
const app = express();
app.use(express.json())
app.use(cors({
    origin: '*',
}));

import UserRoute from './Routes/UserRoute';
import SchoolRoute from "./Routes/SchoolRoute"

// route pages
app.get('/', (req, res) => {
    res.status(200).json({message:"hello i am here"})
})
app.use(UserRoute);
app.use("/school", SchoolRoute);


app.listen(PORT, () => {
    console.log(`User service listening on port ${PORT}`);
}) 