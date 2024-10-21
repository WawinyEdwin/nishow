"use client";
import { getCategories } from "@/lib/db";
import { Category } from "@/types/category";
import Link from "next/link";
import Divider from "../Common/Divider";

const Footer = async () => {
  const categories: Category[] = await getCategories();
  return (
    <>
      <footer className="relative z-10 pt-16 md:pt-20 lg:pt-24">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 sm:w-1/2 lg:w-1/3">
              <div className="mb-12 max-w-[360px] lg:mb-16">
                <h2 className="mb-10 text-xl font-bold text-black dark:text-white ">
                  Nishow
                </h2>
                <p className="mb-9 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                  A platform that give your product visibility to the larger
                  community and helps you showcase what you have been building.
                  For more information emails us [hello@Nishow.com]
                </p>
              </div>
            </div>

            <div className="w-full px-4 sm:w-1/2 lg:w-1/3">
              <div className="mb-12 lg:mb-16">
                <h2 className="mb-10 text-xl font-bold text-black dark:text-white">
                  Categories
                </h2>
                <ul>
                  {categories.map((cat) => (
                    <li key={cat.id}>
                      <Link
                        href={`/category/${cat.name}`}
                        className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                      >
                        {cat.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="w-full px-4 sm:w-1/2 lg:w-1/3">
              <div className="mb-12 lg:mb-16">
                <h2 className="mb-10 text-xl font-bold text-black dark:text-white">
                  Company
                </h2>
                <ul>
                  <li>
                    <Link
                      href="/howitworks"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      How it works
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/advertisewithus"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      Advertise with us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/addproduct"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      Add your product
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/faqs"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      Faqs
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <Divider />
          <div className="py-8">
            <p className="text-center text-base text-body-color dark:text-white">
              Copyright &copy; Nishow 2024 | All rights reserved
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
