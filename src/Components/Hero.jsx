import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <section class="text-white body-font">
      <div class="container  w-full mx-auto flex px-5 pt-36 pb-24 md:flex-row flex-col items-center">
        <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <span className="text-4xl my-6">
            <TypeAnimation
              sequence={[
                "Hello",
                1000,
                "I'm Dwi Anosa Putra",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </span>
          {/* <h1 class="leading-relaxed text-5xl">I'M Dwi Anosa Putra</h1> */}
          <h1 className="text-3xl font-light">Web Developer</h1>
        </div>
        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            class="object-fill  grayscale hover:grayscale-0 object-center rounded  w-[400px] h-[380px] "
            alt="hero"
            src="/dwi.png"
          />
        </div>
      </div>
    </section>
  );
}
