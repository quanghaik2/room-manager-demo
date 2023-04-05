import roomController from "../controllers/roomController";
import express from "express";
const routes = express.Router();

routes.get('/room',roomController.getRoom)
      .post('/search',roomController.searchRoom)
routes.get('/all-rooms',roomController.getAllRooms)
.post('/add-room',roomController.addRoom);
routes.get('/get-a-room/:id', roomController.getARooms)
      .put('/update-room/:id',roomController.updateRoom)
      .post('/update-room/:id',roomController.updateRoom);
routes.get('/room-details/:id',roomController.roomDetails)
      .delete('/delete-room/:id',roomController.deleteRoom)
      .post('/delete-room/:id',roomController.deleteRoom)
      .post('/form-update-room/:id',roomController.formUpdateRoom);

export default routes;


