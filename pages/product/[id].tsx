import { GetServerSideProps, GetStaticProps } from "next";
import { IProduct } from "../../Models/Product";
import Products from "../products"

export interface ProductProps {
    product: IProduct;
  }


function ProductDetail({product} : ProductProps) {

    return (
        <div>
            <h1>{product.name}</h1>
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async ({params}) => {

    
    const res = await fetch(`http://localhost:3000/api/product/${params?.id}`)
    const data = await res.json()
    console.log(data);
    // const { id }: ParsedUrlQuery = ctx.params;
    return{
        props: {
            product: data
        }
    }
}


export default ProductDetail;