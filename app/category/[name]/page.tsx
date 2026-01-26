import Image from "next/image";
import Link from "next/link";
import Divider from "../../../components/Common/Divider";
import { getProductsByCategory } from "../../../lib/db";

interface PageProps {
  params: Promise<{
    name: string;
  }>;
}

export default async function Page(props: PageProps) {
  const params = await props.params;
  const productData = await getProductsByCategory(params.name);
  return (
    <div className="container">
      <h1 className="mt-10 text-2xl font-bold"> Products in category : {params.name}</h1>
      <br />
      <section id="features">
        <div className="container">
          <Divider />
          <div className="mt-4 grid items-center justify-center">
            {productData && productData.length > 0 ? (
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
              <>No products published for this category</>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
