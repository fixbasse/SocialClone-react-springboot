
import {
  Menu,
  ScanFaceIcon,
  Search
} from "lucide-react"

import { Link } from "react-router-dom";

interface LogoProps {
  spread: boolean;
  handleSpread: () => void;
};

//* 
const Logo = ({
  spread,
  handleSpread
}: LogoProps) => {


  return (
    <div
      className={spread ? (
        'flex-1'
      ) : (
        'flex items-center max-[768px]:gap-2 md:gap-4 flex-1'
      )}>
      <Link
        to='/'
      >
        <ScanFaceIcon
          size={40}
          className={`text-teal-500 ml-4
        ${spread && 'hidden'}
        `}
        />
      </Link>

      {/* SEARCH BOX */}
      <section className={`hidden md:flex items-center relative
      ${spread && 'px-4 bg-white dark:bg-gray-900 h-[500px] w-[350px] shadow-md rounded-md'}
      `}>
        <Search
          onClick={handleSpread}
          size={18}
          className={`absolute left-4 text-gray-400 
          ${spread && 'hidden'}
          `}
        />

        <input
          onClick={handleSpread}
          placeholder="Search Fakebook"
          className={`rounded-full bg-gray-100 dark:bg-gray-700 text-md h-[40px] pl-10 font-light duration-300 outline-none focus-visible:ring-0 pr-6
          ${spread && 'pl-4 pr-4 w-full duration-300'}
          `}
        />
      </section>

      {/* SMALL SCREEN ==========> */}
      {/* SEARCH BOX */}
      <section
        //onClick={handleSpread} // for closing it when expand
        className={`hidden max-[768px]:flex items-center w-full z-50 duration-300
      ${spread && 'px-4 bg-white dark:bg-gray-900 absolute top-0 left-0 h-full w-full shadow-md rounded-md duration-300'}
      `}>

        <div
          onClick={handleSpread}
          className={`relative flex items-center justify-center
          ${spread && 'w-full'}
          `}>
          <input
            placeholder="Search Fakebook"
            className={`rounded-full w-0 bg-gray-100 dark:bg-gray-700 text-md h-[40px] pl-4 font-light duration-300 outline-none focus-visible:ring-0 pr-6
          ${spread && 'px-8 w-screen duration-300'}
          `}
          />
          <Search
            className={`absolute text-gray-400
            ${spread && 'hidden'}
            `}
            size={18}
          />
        </div>

        {/* MENUBAR */}
        <div className={`hidden max-[768px]:block hover:bg-gray-100 hover:dark:bg-gray-800 p-2 ml-2 rounded-md cursor-pointer
        
        `}>
          <Menu
            size={25}
            className={`text-gray-400
            ${spread && 'hidden'}
            `}
          />
        </div>
      </section>
    </div>
  )
}

export default Logo