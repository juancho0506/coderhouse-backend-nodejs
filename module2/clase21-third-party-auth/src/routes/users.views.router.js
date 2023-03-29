import { Router } from "express";
import {authToken} from '../utils.js';


const router = Router();

router.get("/login", (req, res) => {
    res.render("login");
});

router.get("/register", (req, res) => {
    res.render("register");
});

router.get("/", //authToken ->Habilitar para JWT 
(req, res) =>{
    res.render("profile", {
        user: req.session.user
        //user: req.user ->Habilitar para JWT
    });
});

router.get("/error", (req, res)=>{
    res.render("error");
});

export default router;