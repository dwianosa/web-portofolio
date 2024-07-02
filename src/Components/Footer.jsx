export default function Footer() {
  return (
    <footer class=" bg-white rounded-lg  m-4 dark:bg-gray-800 shadow-2xl">
      <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024{" "}
          <a href="/" class="hover:underline">
            Dwi Anosa Putra
          </a>
          . All Rights Reserved.
        </span>
        <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a href="/" class="hover:underline me-4 md:me-6">
              Home
            </a>
            <a href="#about" class="hover:underline me-4 md:me-6">
              About
            </a>
          </li>
          <li>
            <a href="#contact" class="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}