import { useContext, useState, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      const bestProducts = products.filter((product) => product.bestseller);

      const shuffled = bestProducts.sort(() => 0.5 - Math.random()); // Shuffle
      const randomFive = shuffled.slice(0, 5); // Pick first 5

      setBestSeller(randomFive);
    }
  }, [products]);

  return (
    <div className="sm:my-10">
      <div className="text-center py-8 text-3xl">
        <Title text1={"BEST"} text2={"SELLERS"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Discover our most-loved pieces — trusted by many, styled by you.
        </p>
      </div>

      {/* Rendering Products */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {bestSeller.map(({ _id, name, image, price }) => (
          <ProductItem
            key={_id}
            id={_id}
            image={image}
            name={name}
            price={price}
          />
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
