import crypto from "crypto";
import multer from "multer";
import { extname, resolve } from "path";

// Exporta uma configuração de upload
export default {
    // Função que retorna uma configuração de armazenamento para o multer
    upload(folder: string) {
        return {
            // Configuração do armazenamento para o multer
            storage: multer.diskStorage({
                // Define o diretório onde os arquivos serão armazenados
                destination: resolve(__dirname, "..", "..", folder),
                // Define o nome do arquivo quando ele for salvo
                filename: (request, file, callback) => {
                    // Gera um hash aleatório de 16 bytes para garantir um nome único
                    const fileHash = crypto.randomBytes(16).toString("hex");
                    // Cria o nome do arquivo final combinando o hash e o nome original do arquivo
                    const fileName = `${fileHash}-${file.originalname}`;

                    // Passa o nome do arquivo para o callback, permitindo o multer salvar o arquivo com esse nome
                    return callback(null, fileName);
                }
            })
        };
    }
};

