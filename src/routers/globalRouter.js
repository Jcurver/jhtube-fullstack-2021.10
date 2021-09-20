import express from "express";
import { join, login} from "../controllers/userController";
import { trending } from "../controllers/videoController";
const globalRouter = express.Router();

globalRouter.get("/", trending);
globalRouter.get("/Join", join);
globalRouter.get("/login", login);


export default globalRouter;
