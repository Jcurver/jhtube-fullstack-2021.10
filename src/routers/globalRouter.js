import express from "express";
import { join, login} from "../controllers/userController";
import { trending, search } from "../controllers/videoController";
const globalRouter = express.Router();

globalRouter.get("/", trending);
globalRouter.get("/Join", join);
globalRouter.get("/login", login);
globalRouter.get("/search", search);


export default globalRouter;
