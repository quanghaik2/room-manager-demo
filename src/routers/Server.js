
import contactAPI from "./contactRouter"
import facilitiesAPI from "./facilitiesAPI";
import homeAPI from "./homeAPI";
import roomAPI from "./roomRouter";
import testCookie from "./cookie";
import authenticationAPI from "./authenticationRouter";
import accountRouter from "./accountRouter"
import reservationRouter from "./reservationRouter";
import userRouter from "./userRouter";

const server = (app) =>{
        app.use( testCookie);
        app.use( homeAPI);
        app.use(facilitiesAPI);        
        app.use( contactAPI);
        app.use( roomAPI);
        app.use(accountRouter);
        app.use(authenticationAPI);
        app.use(reservationRouter);
        app.use(userRouter);
    }
export default server;
