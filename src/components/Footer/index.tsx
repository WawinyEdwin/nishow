"use client";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="relative z-10 pt-16 md:pt-20 lg:pt-24">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 sm:w-1/2 lg:w-1/3">
              <div className="mb-12 max-w-[360px] lg:mb-16">
                <p>Genfluence AI</p>
                <p className="mb-9 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                  hello@genfluence.ai
                </p>
              </div>
            </div>

            <div className="w-full px-4 sm:w-1/2 lg:w-1/3">
              <div className="mb-12 lg:mb-16">
                <h2 className="mb-10 text-xl font-bold text-black dark:text-white">
                  Support
                </h2>
                <ul>
                  <li>
                    <Link
                      href="/"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      Telegram Community
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      Refund Policy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-full px-4 sm:w-1/2 lg:w-1/3">
              <div className="mb-12 lg:mb-16">
                <h2 className="mb-10 text-xl font-bold text-black dark:text-white">
                  Legal
                </h2>
                <ul>
                  <li>
                    <Link
                      href="/contact"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      Terms of Service
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      Content Moderation
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="h-px w-full bg-gradient-to-r from-transparent via-[#D2D8E183] to-transparent dark:via-[#959CB183]"></div>
          <div className="py-8">
            <p className="text-center text-base text-body-color dark:text-white">
              Copyright &copy; Genfluence AI 2024 | All rights reserved
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
