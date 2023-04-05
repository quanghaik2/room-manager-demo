import express from "express";
import axios from "axios";

const router = express.Router();

router.get('/cookie', (req, res) => {
    const rooms = axios.get("/api-hotel/all_rooms")
    console.log(rooms);
    // res.status(200).render("admin_home");
    res.json(rooms);
});

export default router;