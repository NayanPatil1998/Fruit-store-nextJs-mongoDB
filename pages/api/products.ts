import initDB from "../../helpers/initDB";
import type { NextApiRequest, NextApiResponse } from 'next'
import Product, { IProduct } from "../../Models/Product";
import { resolve } from "path";
initDB();

export default async (req: NextApiRequest, res: NextApiResponse) => {

    const product: IProduct[] = await Product.find(); 
    console.log(product.length)
    res.status(200).json(product);
    
  
}
