import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { Star, StarHalf } from "lucide-react";
import RelatedProducts from "../components/RelatedProducts";

export default function Product() {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");

  function fetchProductData() {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
      }
      return null;
    });
  }

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  return productData ? (
    <div className="border-t border-black/10 pt-12 bg-[#FFF6EC]">
      {/* Product Section */}
      <div className="flex flex-col lg:flex-row gap-14">
        {/* Images */}
        <div className="flex-1 flex flex-col-reverse lg:flex-row gap-5">
          <div className="flex lg:flex-col gap-3 overflow-x-auto lg:w-[20%]">
            {productData.image.map((item, index) => (
              <img
                key={index}
                src={item}
                onClick={() => setImage(item)}
                className={`w-20 h-20 object-cover rounded-lg cursor-pointer border transition ${
                  image === item
                    ? "border-purple-600"
                    : "border-black/10 hover:border-purple-400"
                }`}
                alt=""
              />
            ))}
          </div>

          <div className="flex-1 bg-white rounded-2xl p-5 border border-black/10">
            <img
              src={image}
              className="w-full h-auto object-cover rounded-xl"
              alt=""
            />
          </div>
        </div>

        {/* Product Info */}
        <div className="flex-1">
          <h1 className="text-3xl font-semibold text-black">
            {productData.name}
          </h1>

          <div className="flex items-center gap-1 mt-3 text-purple-600">
            <Star className="w-4" />
            <Star className="w-4" />
            <Star className="w-4" />
            <Star className="w-4" />
            <StarHalf className="w-4" />
            <span className="text-black/60 text-sm ml-2">(122 reviews)</span>
          </div>

          <p className="mt-6 text-3xl font-bold text-black">
            {currency}
            {productData.price}
          </p>

          <p className="mt-6 text-black/70 leading-relaxed">
            {productData.description}
          </p>

          {/* Size Selector */}
          <div className="mt-8">
            <p className="font-medium mb-3 text-black">Select Size</p>
            <div className="flex gap-3 flex-wrap">
              {productData.sizes.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setSize(item)}
                  className={`px-4 py-2 rounded-md text-sm border transition ${
                    size === item
                      ? "bg-purple-600 text-white border-purple-600"
                      : "border-black/20 text-black hover:border-purple-500"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Add to cart */}
          <button
            onClick={() => addToCart(productData._id, size)}
            className="mt-10 bg-black text-white px-12 py-4 rounded-lg text-sm hover:bg-purple-700 transition"
          >
            Add to Cart
          </button>

          {/* Info */}
          <div className="mt-8 text-sm text-black/60 space-y-1">
            <p>✔ 100% Original Product</p>
            <p>✔ Easy exchange within 24hrs</p>
            <p>✖ Cash on delivery not available</p>
          </div>
        </div>
      </div>

      {/* Description & Reviews */}
      <div className="mt-24">
        <div className="flex border-b border-black/10">
          <button className="px-6 py-3 font-medium border-b-2 border-purple-600 text-black">
            Description
          </button>
          <button className="px-6 py-3 text-black/50">
            Reviews (122)
          </button>
        </div>

        <div className="mt-6 text-black/70 text-sm space-y-4 leading-relaxed max-w-4xl">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            suscipit totam deserunt quidem explicabo.
          </p>
          <p>
            Totam perspiciatis eum debitis temporibus nobis. Reprehenderit magni
            ducimus doloribus porro sapiente.
          </p>
        </div>
      </div>

      {/* Related Products */}
      <RelatedProducts
        category={productData.category}
        subCategory={productData.subCategory}
      />
    </div>
  ) : (
    <div className="h-[60vh]" />
  );
}
