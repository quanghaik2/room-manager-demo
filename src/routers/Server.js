
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
        app.use("/api-hotel", testCookie);
        app.use('/api-hotel', homeAPI);
        app.use('/api-hotel',facilitiesAPI);        
        app.use('/api-hotel', contactAPI);
        app.use('/api-hotel', roomAPI);
        app.use('/api-hotel',accountRouter);
        app.use('/api-hotel',authenticationAPI);
        app.use('/api-hotel',reservationRouter);
        app.use('/api-hotel',userRouter);
    }
export default server;
