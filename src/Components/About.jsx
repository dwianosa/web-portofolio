export default function About() {
  return (
    <div id="about" className=" flex justify-center my-20 py-10">
      <div class="flex flex-row items-center bg-white border border-gray-200 rounded-lg shadow w-full h-auto hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <img
          class="object-cover rounded-t-lg w-[400px] md:rounded-none md:rounded-s-lg grayscale hover:grayscale-0"
          src="/dwi-2.png"
          alt=""
        />
        <div class="flex flex-col px-6">
          <h1 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            About Me
          </h1>
          <p class=" py-14 font-normal text-gray-700 dark:text-gray-400">
            " Hello, I am Dwi Anosa Putra, an Informatics Engineering student at
            the Padang Institute of Technology. My love of technology and
            computing prompted me to choose this path as a first step in
            building a professional career.I studied at a college that focused
            on computer science and information technology. Here, I learn about
            various aspects that include programming, computer networks,
            databases, information security, and web technology.I believe that
            this technology has great potential to change the world, and I want
            to contribute to developing innovative solutions that benefit
            society. "
          </p>
        </div>
      </div>
    </div>
  );
}
