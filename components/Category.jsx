"use client";
import React from "react";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
// image zone
import cate1 from "../public/category/package.png";

const Category = () => {
  const menu = [
    {
      catename: "บรรจุภัณฑ์เฟสท์",

      path: "/",
    },
    {
      catename: "อุปกรณ์สำนักงาน",
      path: "/",
    },
    {
      catename: "ผลิตภัณฑ์ทำความสะอาด",
      path: "/",
    },
    {
      catename: "test",
      path: "/",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <>
      <div className="mt-10 md:mt-5">
        <h1 className="font-bold text-white text-center">ผลิตภัณฑ์ของเรา</h1>
      </div>
      <div className="md:mt-5">
        {/* Carousel for small screens */}
        <div className="block sm:hidden">
          <Slider {...settings}>
            {menu.map((item, index) => (
              <div key={index} className="p-4">
                <div className="bg-[#f1f0ed] p-10 text-center rounded-md font-medium hover:shadow-2xl delay-100 transition-all ease-in-out duration-300">
                  <Link href={item.path} className="font-bold">
                    {item.catename}
                  </Link>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        {/* Grid for medium and larger screens */}
        <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center">
          {menu.map((item, index) => (
            <div
              key={index}
              className="bg-[#f1f0ed] p-10 text-center rounded-md font-medium hover:shadow-2xl delay-100 transition-all ease-in-out duration-300"
            >
              <Link href={item.path} className="font-bold">
                {item.catename}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Category;
