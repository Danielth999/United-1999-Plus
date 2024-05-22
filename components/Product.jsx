"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const Product = () => {
  const [product, setProduct] = useState([]);

  const fetchProduct = async () => {
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProduct(data);
    } catch {
      console.log("error");
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <>
      <div className="mt-10">
        <h1 className="font-bold text-xl text-black">สินค้าแนะนำ</h1>
      </div>
      <div className="grid grid-cols-2 place-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {product.map((item) => (
          <div
            key={item.id}
            className="max-w-xs overflow-hidden border bg-white rounded-lg shadow-sm transition-all delay-100 ease-in-out duration-100 hover:shadow-lg flex flex-col justify-between"
          >
            <div>
              <div className="relative w-full h-48 mt-2">
                <Image
                  className="object-cover"
                  src={item.image}
                  alt={item.title}
                  layout="fill"
                />
              </div>
              <div className="px-4 py-2">
                <h1 className="text-xl font-bold line-clamp-2 text-gray-800 uppercase">
                  {item.title}
                </h1>
              </div>
            </div>
            <div className="px-4 py-2 ">
              <h1 className="text-lg font-bold text-black">฿{item.price}</h1>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Product;
