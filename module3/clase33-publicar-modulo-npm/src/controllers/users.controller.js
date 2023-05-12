import sumador from 'clase33-test-npm-sum-module';
const users = [];

export const getUsers = (req, res) => {
    try {
        res.send({message: "Success!", payload: users});
    } catch (error) {
        console.error(error);
        res.status(500).send({error:  error, message: "No se pudo obtener los usuarios."});
    }
    
}

export const suma = (req, res) => {
    //try {
        console.log(req.body);
        const {par1, par2} = req.body;
        if (!par1 || !par2) {
            return res.status(400).send({status: "error", error: "Parametros requeridos no encontrados!"});
        }
        const result = par1 + par2;
        console.log("Resultado de la suma: " + result);
        return res.status(201).send({status: "success", payload: {message: "Resulado de sumar par1: " + par1 + ", con par2 " + par2 + " es: " + result}});
    /*} catch (error) {
        console.error(error);
        res.status(500).send({error:  error.code, message: error.message});
    }*/
}