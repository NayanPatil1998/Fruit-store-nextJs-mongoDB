import { GetStaticProps } from "next";
import Link from "next/link";
import React from "react";
import Corosoul from "../Components/corosoul";
import { IProduct } from "../Models/Product";

export interface ProductsProps {
  products: IProduct[];
}

function Home({ products }: ProductsProps) {
  const productList = products.map((product) => {
    return (
      <div className="card" key={product._id}>
        <img
          className="card-img-top"
          src={product.mediaUrl}
          width="140"
          height="180"
          alt="Card image cap"
        />
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text"> ₹{product.price}</p>
          <p className="card-text">{product.rating} <i className="fas fa-star"></i></p>
          <Link href={'/product/[id]'} as= {`/product/${product._id}`}>
          <a className="btn btn-primary">
            View
          </a>
          </Link>
        </div>
      </div>
    );
  });

  return (
    <div>
      <Corosoul />
      <div className="container" >
      {/* <img className="img-fluid homeImg" height="300px" src="corosoul2.jpg" alt="First slide" /> */}
        <div className="row product-area justify-content-center"><h3>New Products</h3>{productList}</div>
      </div>

      <Link href="/products">
        <a>
          <h2>Go To Products page</h2>
        </a>
      </Link>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const res = await fetch("http://localhost:3000/api/products");
  const data = await res.json();
  return {
    props: {
      products: data,
    },
  };
};

export default Home;
