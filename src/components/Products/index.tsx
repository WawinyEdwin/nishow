import Image from "next/image";
import Link from "next/link";
import Divider from "../Common/Divider";
import productData from "./productData";

const Features = () => {
  return (
    <>
      <section id="features">
        <div className="container">
          <Divider />
          <div className="mt-4 grid items-center justify-center">
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
                    <p>{product.category} </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
