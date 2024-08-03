import prismaClient from "../../prisma";
import {SaleProductRequest} from "../../models/interfaces/sale/SaleProductrequest";

class SaleProductService {
    async execute({product_id,amount}:SaleProductRequest){
        if(!product_id || !amount){
            throw new Error("dador nao foram passados corretamente")
    }
        const queryProduct = await prismaClient.product.findFirst({
             where: {
                id:product_id
            }
        })
        if(queryProduct?.amout>amount && amount>0){
            const newAmout = (queryProduct?.amount-amount)
            const saveSale = await prismaClient.product.update({
             where:{
                id:product_id
             },
            data:{
            amount:newAmout
            },
            select:{
            id:true,
            name:true,
            amount:true
            }   
        })
        return saveSale
    } else{
        throw new Error("não foi possivel afetuar a venda")
    }           
  }
}

export { SaleProductService}