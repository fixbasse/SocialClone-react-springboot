
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
        'flex items-center gap-4 flex-1'
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
          className={`absolute left-4
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

      <div className='hidden max-[768px]:block hover:bg-gray-100 hover:dark:bg-gray-800 p-2 rounded-md cursor-pointer'>
          <Menu
            size={25}
          />
        </div>

      {/* MOBILE */}
      {/* SEARCH BOX */}
      {/* <section className={`hidden max-[768px]:flex items-center relative
      ${spread && 'px-4 bg-white dark:bg-gray-900 h-[500px] w-[350px] shadow-md rounded-md'}
      `}>

        <div
          onClick={handleSpread}
          className={`bg-gray-100 dark:bg-gray-800 p-3 rounded-full
        ${spread && 'hidden'}
        `}>
          <Search
            size={18}
          />
        </div>


        <input
          onClick={handleSpread}
          placeholder="Search Fakebook"
          className={`rounded-full bg-gray-100 dark:bg-gray-700 text-md h-[40px] pl-10 font-light duration-300 outline-none focus-visible:ring-0 pr-6
          ${spread && 'pl-4 pr-4 w-full duration-300'}
          `}
        />
      </section> */}
    </div>
  )
}

export default Logo