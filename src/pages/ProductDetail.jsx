import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState("");

  const fetchApi = async () => {
    try {
      const response = await axios.get(`https://dummyjson.com/recipes/${id}`);
        setProduct(response.data);
      console.log("show response: ", response.data);
    } catch (error) {
      console.log(error);
    }
  };
// process.env.API_KEY
  useEffect(() => {
    fetchApi();
  }, [id]);

    if (!product) return <div>Loading...</div>;

  return (
    <>
      <div>
        <h1>{product.name}</h1>
        <img src={product.image} alt={product.name} />
        <h2>Ingredients</h2>
        <ul>
          {product.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <h2>Instructions</h2>
        <ol>
          {product.instructions.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
        <p>Prep Time: {product.prepTimeMinutes} mins</p>
        <p>Cook Time: {product.cookTimeMinutes} mins</p>
        <p>Servings: {product.servings}</p>
      </div>
    </>
  );
};

export default ProductDetail;
