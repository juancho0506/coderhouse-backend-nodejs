import CustomError from "../services/errors/CustomError.js";
import EErrors from "../services/errors/errors-enum.js";
import { generateUserErrorInfo, getUserByIdErrorInfo } from "../services/errors/messages/user-creation-error.message.js";

const users = [];

export const getUsers = (req, res) => {
    try {
        res.send({message: "Success!", payload: users});
    } catch (error) {
        console.error(error);
        res.status(500).send({error:  error, message: "No se pudo obtener los usuarios."});
    }
    
}

export const saveUser = (req, res) => {
    //try {
        console.log(req.body);
        const {first_name, last_name, age, email} = req.body;
        if (!first_name || !email) {
            //Create Custom Error
            CustomError.createError({
                name: "User Creation Error",
                cause: generateUserErrorInfo({first_name, last_name, age, email}),
                message: "Error tratando de crear el usuario",
                code: EErrors.INVALID_TYPES_ERROR
            });
        }

        const userDto = {
            first_name,
            last_name, 
            age,
            email
        }
        if (users.length === 0) {
            userDto.id = 1;
        } else {
            userDto.id = users[users.length-1].id + 1;
        }
        users.push(userDto);
        res.status(201).send({status: "success", payload: userDto});
    /*} catch (error) {
        console.error(error);
        res.status(500).send({error:  error.code, message: error.message});
    }*/
}

export const getUserById = (req, res) => {
    console.log(`Entrando a get user by id, buscando por id: ${req.params.uid}`);
    console.log(parseInt(req.params.uid));
    if(!req.params.uid || isNaN(parseInt(req.params.uid))){
        console.log("Generando error custom");
        //Create Custom Error
        CustomError.createError({
            name: "User Get By Id Error",
            cause: getUserByIdErrorInfo(req.params.uid),
            message: "Error tratando de obtener el usuario",
            code: EErrors.INVALID_PARAM
        });
    }
    res.send({message: "Success!", payload: users});
}