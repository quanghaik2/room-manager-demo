import reservationController from "../controllers/reservationController";
import authenticationMiddleware from "../middlewares/auther.middlewares";
import express from "express";
const router = express.Router();

router.get('/booking_room/:idRoom',authenticationMiddleware, reservationController.bookingRoom);
router.get('/reservation',reservationController.getAllReservation)
      .post('/reservation/:idRoom', reservationController.reservationRoom)
      .put('/reservation/:id', reservationController.updateReservation)
      .delete('/reservation/:id',reservationController.deleteReservation)
router.get('/reservation/get_a_reservation',reservationController.getAReservation)
      .post('/delete/reservation/:id',reservationController.deleteReservation)
      .get('/get-reservation-user/:idUser',reservationController.getReservationUser);

export default router;