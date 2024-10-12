import Image from "next/image";
import Link from "next/link";

const Features = () => {
  return (
    <>
      <section id="features">
        <div className="container">
          <Image
            src="/images/hero.png"
            alt="hero"
            width={1280}
            height={500}
            className="h-auto w-full"
          />
          <div className="mt-4 grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
            <div className="card shadow-x1 w-full">
              <figure>
                <img src="images/v2_6.png" alt="vv" />
              </figure>
              <div className="card-body items-start p-2 text-left">
                <p className="text-3xl font-bold">Captivating Characters</p>
                <br />
                <p>
                  Use our cutting edge diffusion technology to create stunning
                  characters
                </p>
              </div>
            </div>

            <div className="card shadow-x1 w-full">
              <figure>
                <img src="images/v2_7.png" alt="" />
              </figure>
              <div className="card-body items-start p-2 text-left">
                <p className="text-3xl font-bold">Breathtaking Quality</p>
                <br />
                <p>
                  Get started with easy to use templates and prompts to control
                  your character's appearance
                </p>
              </div>
            </div>

            <div className="card shadow-x1 w-full">
              <figure>
                <img src="images/v2_8.png" alt="rere" />
              </figure>
              <div className="card-body items-start p-2 text-left">
                <p className="text-3xl font-bold">Unparallel Accuracy</p>
                <br />
                <p>
                  Create evocative poses and bring fans deeper into your
                  characters world
                </p>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <div className={`mx-auto w-full text-center`}>
              <h2 className="mb-2 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
                Make it Epic
              </h2>
              <p className="mb-4 text-base !leading-relaxed text-body-color md:text-lg">
                Start dreaming, start creating
              </p>
            </div>

            <div className="flex flex-col items-center justify-center space-y-0 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Link
                href="#"
                className="rounded-full bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
              >
                try it out
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
