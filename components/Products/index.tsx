"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getProducts, Product } from "../../lib/db";
import Divider from "../Common/Divider";

const Features = () => {
  const [productData, setProductData] = useState<Product[] | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products = await getProducts();
        setProductData(products);
      } catch (err) {
        console.error("Error fetching products:", err);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <section id="features">
        <div className="container">
          <Divider />
          <div className="mt-4 grid items-center justify-center">
            {productData ? (
              <>
                {productData.map((product) => (
                  <Link href={product.link} key={product.id}>
                    <div className="flex items-start space-x-4 pb-4">
                      <Image
                        src={product.logo}
                        alt="logo"
                        width={70}
                        height={70}
                        className=" rounded-lg object-cover"
                      />
                      <div className="justify-center">
                        <p className="">
                          {product.name} - {product.short_description}
                        </p>
                        <br />
                        <p>
                          {Array.isArray(product.category)
                            ? product.category[0]?.name
                            : product.category?.name}{" "}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </>
            ) : (
              <>
                Oops! No products to be showcased as per this time, try adding
                your product
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
