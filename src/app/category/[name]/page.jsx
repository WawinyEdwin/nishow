"use client";
import Divider from "../../../components/Common/Divider";
import { getProductsByCategory } from "../../../lib/db";
import Image from "next/image";
import Link from "next/link";

export default async function Page({ params }) {
  const productData = await getProductsByCategory(params.name);
  return (
    <div className="container">
      <h1> Products in category : {params.name}</h1>
      <br />
      <section id="features">
        <div className="container">
          <Divider />
          <div className="mt-4 grid items-center justify-center">
            {productData && productData.length > 1 ? (
              <>
                {" "}
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
                        <p>{product.category[0]?.name} </p>
                      </div>
                    </div>
                  </Link>
                ))}{" "}
              </>
            ) : (
              <>No products published for this category</>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
