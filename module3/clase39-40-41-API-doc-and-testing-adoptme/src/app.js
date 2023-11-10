import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';

import usersRouter from './routes/users.router.js';
import petsRouter from './routes/pets.router.js';
import adoptionsRouter from './routes/adoption.router.js';
import sessionsRouter from './routes/sessions.router.js';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUIExpress from 'swagger-ui-express';

const app = express();
const PORT = process.env.PORT||9090;
const connection = mongoose.connect(`mongodb://localhost:27017/clase39-adoptme?retryWrites=true&w=majority`)

const swaggerOptions = {
    definition: {
        openapi: '3.0.1',
        info: {
            title: "Documentacion API Adoptme",
            description: "Documentacion del uso de las apis relacionadas."
        }
    },
    apis: [`./src/docs/**/*.yaml`]
};

const specs = swaggerJSDoc(swaggerOptions);

app.use(express.json());
app.use(cookieParser());

//Declare swagger Api endpoint
app.use('/apidocs', swaggerUIExpress.serve, swaggerUIExpress.setup(specs));
app.use('/api/users',usersRouter);
app.use('/api/pets',petsRouter);
app.use('/api/adoptions',adoptionsRouter);
app.use('/api/sessions',sessionsRouter);

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
});
