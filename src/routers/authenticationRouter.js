import authenticationController from '../controllers/authenticationController';
import adminMiddleware from '../middlewares/adminMiddlewares';
import express from 'express'
import router from './cookie';
const routes = express.Router();


router.route('/login').get(authenticationController.loginView)
                      .post(authenticationController.login);
router.get('/admin',adminMiddleware,authenticationController.admin)
      .post('/admin-home',authenticationController.admin)
router.get('/get', authenticationController.getRooms)
      .get('/log-out', authenticationController.logOut);
router.route('/loginGg').post(authenticationController.loginGoogle)

export default routes;