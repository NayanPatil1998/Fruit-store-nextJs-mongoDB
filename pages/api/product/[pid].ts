import { NextApiRequest, NextApiResponse } from "next";
import Product, { IProduct } from "../../../Models/Product";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { pid } = req.query;
  const product: IProduct = await Product.findOne({ _id: pid });
  res.status(200).json(product);
};
