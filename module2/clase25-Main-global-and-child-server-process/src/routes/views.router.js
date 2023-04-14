import {Router} from 'express';
import {fork} from 'child_process';

const router = Router();

router.get('/', (req,res)=>{
    res.render('index',{});
});

router.get("/suma", (req,res)=>{
    const child = fork("./src/forks/operations.js");
    child.send("Iniciar calculo");
    child.on("message", result => {
        res.send(`El resultado de la operacion es ${result}`);
    });
});

//Child Process - Fork 
const operacionCompleja = () => {
    let result = 0;
    for (let i = 0; i < 5e9; i++) {
        result += i;
    }
    return result;
};

export default router;