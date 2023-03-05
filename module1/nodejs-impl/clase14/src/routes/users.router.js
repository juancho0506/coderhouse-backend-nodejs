import {Router} from "express";
import { userModel } from "../models/user.model.js";

const router = Router();

router.get("/", async (req, res)=> { //Debe ser async para poder trabajar con mongoose.
    try {
        let users = await userModel.find(); //Es async
        console.log(users);
        res.send(users);
    } catch (error) {
        console.error("No se pudo obtener usuarios con moongose: " + error);
        res.status(500).send({error: "No se pudo obtener usuarios con moongose", message: error});
    }
});

router.post("/", async (req, res)=> { //Debe ser async para poder trabajar con mongoose.
    try {
        let {first_name, last_name, email} = req.body;
        let user = await userModel.create({first_name, last_name, email}); //Es async
        res.status(201).send(user);
    } catch (error) {
        console.error("No se pudo obtener usuarios con moongose: " + error);
        res.status(500).send({error: "No se pudo obtener usuarios con moongose", message: error});
    }
});

router.put("/:id", async (req, res) =>{
    try {
        let userUpdated = req.body;
        let user = await userModel.updateOne({_id: req.params.id}, userUpdated);
        res.status(202).send(user);
    } catch (error) {
        console.error("No se pudo obtener usuarios con moongose: " + error);
        res.status(500).send({error: "No se pudo obtener usuarios con moongose", message: error});
    }
});

export default router;