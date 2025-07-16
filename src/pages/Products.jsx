import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const fetchApi = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/recipes");
      setProducts(response.data.recipes);
      console.log(response.data.recipes);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);

  const handleDetail = (productId) => {
    navigate(`/productDetail/${productId}`);
  };

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {products.map((item) => (
        <div
          key={item.id}
          style={{ border: "1px solid black", cursor: "pointer" }}
          onClick={() => handleDetail(item.id)}
        >
          <p>{item.name}</p>
          <p>{item.ingredients.join(", ")}</p>
          <img
            src={item.image}
            alt={item.name}
            style={{ width: "200px", height: "200px" }}
          />
        </div>
      ))}
    </div>
  );
};

export default Products;
