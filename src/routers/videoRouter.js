import express from "express";
import {
  watch,
  getUpload,
  getEdit,
  postEdit,
  postUpload,
} from "../controllers/videoController";

const videoRouter = express.Router();
// videoRouter.get("/upload", getUpload);
// videoRouter.post("/upload", postUpload); 이 두줄은 아래 한 줄과 같습니다.
videoRouter.route("/upload").get(getUpload).post(postUpload)
videoRouter.get("/:id", watch);
videoRouter.route("/:id/edit").get(getEdit).post(postEdit);


export default videoRouter;
