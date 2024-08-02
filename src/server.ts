import express, { Request, Response, NextFunction } from 'express';
import router from './routes.ts/routes'; 

const app = express();
const port = 3000;

app.use(express.json()); 
app.use(router);

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
