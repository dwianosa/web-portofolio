import { useState } from "react";

export default function Navbar() {
  //   const [open, setOpen] = useState(false);
  return (
    <nav className=" ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 text-white ">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className=" text-2xl   hover:font-bold">Dwi</span>
        </a>
        <div className="hidden w-full md:block md:w-auto">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 ">
            <li>
              <a href="/" className="hover:text-slate-400  ">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-slate-400  ">
                About
              </a>
            </li>

            <li>
              <a href="#contact" className="hover:text-slate-400  ">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
