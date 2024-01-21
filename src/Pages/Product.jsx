import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import Breadcrum from "../Components/Breadcrums/Breadcrum";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";
import Hero3 from "../Components/Hero3/Hero3";

const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_product.find((e) => e.id === Number(productId));

  return (
    <div>
      <Hero3 />
      <div>
        <Breadcrum product={product} />
        <ProductDisplay product={product} />
      </div>
    </div>
  );
};

export default Product;
