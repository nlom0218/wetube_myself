import express from "express";
import {
  changePassword,
  getEditProfile,
  userDetail,
  postEditProfile,
} from "../controllers/userController";
import routes from "../routes";

const userRouter = express.Router();

userRouter.get(routes.editProfile, getEditProfile);
userRouter.post(routes.editProfile, postEditProfile);

userRouter.get(routes.changePassword, changePassword);
userRouter.get(routes.userDetail(), userDetail);

export default userRouter;
