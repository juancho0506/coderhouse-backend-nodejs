import { Router } from "express";
import PetsService from '../services/db/pets.service.js';

const router = Router();
const petsService = new PetsService();

router.get("/", async (req, res) =>{
    try {
        const pets = await petsService.getAll();
        if (!pets) {
            res.status(202).json({message: "No pets found: "});
        }
        res.json(pets);
    } catch (error) {
        console.error("Error consultando las mascotas");
        res.status(500).send({error: "Error consultando las mascotas", message: error});
    }
});

router.post("/", async (req, res) =>{
    const {name, type} = req.body;
    try {
        const result = await petsService.save({name: name, type: type});
        res.status(201).json(result);
    }  catch (error) {
        console.error(error);
        res.status(500).send({error:  error, message: "No se pudo guardar la mascota."});
    }
});

router.get("/:word([a-zA-Z%C3%A1%C3%A9%20]+)", async(req, res) =>{
    try {
        console.log("Mascota despues de la busqueda: ");
        console.log(req.pet);
        const pets = req.pet; //await petsService.findByName(req.params.word); ->sin router.param
        if (!pets) {
            res.status(202).json({message: "No pets found: "});
        }
        res.json(pets);
    } catch (error) {
        console.error("Error consultando las mascotas");
        res.status(500).send({error: "Error consultando las mascotas", message: error});
    }
});

router.put("/:word([a-zA-Z%C3%A1%C3%A9%20]+)", async (req, res) =>{
    try {
        const pet = req.pet;
        console.log(pet);
        const result = await petsService.update({name: pet.name}, {isAdopted: true});
        res.status(202).json(result);
    }  catch (error) {
        console.error(error);
        res.status(500).send({error:  error, message: "No se pudo guardar la mascota."});
    }
});

router.get("*", (req, res)=> {
    res.status(400).send("Cannot get that URL.");
});

router.param("word", async (req, res, next, name) => {
    console.log("Buscando nombre de mascota con valor: " + name);
    try {
        let result = await petsService.findByName(name);
        if (!result) {
            req.pet = null;
        } else {
            req.pet = result;
        }
        next();
    } catch (error) {
        console.error("Error consultando las mascotas");
        res.status(500).send({error: "Error consultando las mascotas", message: error});
    }
});

export default router;