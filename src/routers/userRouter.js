import userController from "../controllers/userController";
import authenticationMiddleware from "../middlewares/auther.middlewares";
import express from "express";
const routes = express.Router();

routes.get('/user',authenticationMiddleware,userController.getUser)
      .post('/user',authenticationMiddleware,userController.updateUser)
      .put('/user',userController.updateUser)
      .delete('/user',userController.deleteUser);
routes.get('/get_all_user',userController.getAllUser);


export default routes;