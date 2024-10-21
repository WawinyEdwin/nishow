import Link from "next/link";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden  md:pb-[120px] md:pt-[10px] xl:pb-[10px] xl:pt-[10px] 2xl:pb-[30px] 2xl:pt-[20px]"
      >
        <div className="container">
          <div className="mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[800px] text-center">
                <h1 className="mb-0 text-4xl font-bold leading-tight text-black dark:text-white sm:text-3xl sm:leading-tight md:text-3xl md:leading-tight">
                  Launch your product to the world.
                </h1>
                <br />
                  <Link
                    href="/addproduct"
                    className=" bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
                  >
                    Add your product
                  </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
