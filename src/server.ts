import express, { Request, Response, NextFunction } from 'express';
import router from './routes/routes'; 
import "express-async-errors"
const app = express();
const port = 3000;

app.use(express.json()); 
app.use(router);
// Middleware de tratamento de erros
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof Error) {
        return res.status(400).json({
            error: err.message
        });
    }
    return res.status(500).json({
        status: 'error',
        message: 'Internal server error'
    });
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
