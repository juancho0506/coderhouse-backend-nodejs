import UserService from '../services/dao/users.dao.js';

const userService = new UserService();

export const getUsers = async (req, res) => {
    try {
        const users = await userService.getAll();
        res.send({message: "Success!", payload: users});
    } catch (error) {
        console.error(error);
        res.status(500).send({error:  error, message: "No se pudo obtener los usuarios."});
    }
    
}

export const getUserById = async (req, res) => {
    res.send({message: "Success!", payload: "getUserById: Por implementar"});
}

export const saveUser = async (req, res) => {
    try {
        let result = await userService.save(req.body);
        res.status(201).send(result);
    } catch (error) {
        console.error(error);
        res.status(500).send({error:  error, message: "No se pudo guardar el usuario."});
    }
}