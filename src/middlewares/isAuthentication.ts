import dotenv from 'dotenv';

dotenv.config();
import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";
import { Payload } from "../models/interfaces/auth/Payload";

export function isAuthentication(
    req: Request,
    res: Response,
    next: NextFunction
) {
    // Verifica se o cabeçalho Authorization existe
    const authToken = req.headers.authorization;
    if (!authToken) {
        return res.status(401).end();
    }

    // Extrai o token do cabeçalho Authorization
    const [, token] = authToken.split(' ');

    try {
        // Verifica e decodifica o token
        const { sub }: Payload = verify(token, process.env.JWT_SECRET as string) as Payload;

        // Adiciona o ID do usuário à requisição
        req.user_id=sub // Type assertion para adicionar user_id

        // Permite que a requisição prossiga
        return next();
    } catch (error) {
        // Retorna um erro 401 se o token for inválido
        return res.status(401).end();
    }
}
