import { useState } from "react"
import {
  ScanFaceIcon,
  Search
} from "lucide-react"
import { Link } from "react-router-dom";

const Logo = () => {
  const [spread, setSpread] = useState(false);

  return (
    <div
      className={`flex items-center gap-4 flex-1 ml-4
        ${spread && 'ml-0 mr-4 flex-1 flex items-center gap-0'}
      `}
    >
      <Link to='/'>
        <ScanFaceIcon
          size={40}
          className={`text-teal-500
        ${spread && 'hidden'}
        `}
        />
      </Link>

      {/* SEARCH BOX */}
      <section className={`hidden md:flex items-center relative
      ${spread && 'px-4 bg-white dark:bg-gray-900 h-[500px] w-[350px] shadow-md'}
      `}>
        <Search
          onClick={() => setSpread(true)}
          size={18}
          className={`absolute left-4
          ${spread && 'hidden'}
          `}
        />

        <input
          onClick={() => setSpread(!spread)}
          placeholder="Search Fakebook"
          className={`rounded-full bg-gray-100 dark:bg-gray-700 text-md h-[40px] pl-10 font-light duration-300 outline-none focus-visible:ring-0 pr-6
          ${spread && 'pl-4 pr-4 w-full duration-300'}
          `}
        />
      </section>

      {/* MOBILE */}
      {/* SEARCH BOX */}
      <section className={`hidden max-[768px]:flex items-center relative
      ${spread && 'px-4 bg-white dark:bg-gray-900 h-[500px] w-[350px] shadow-md'}
      `}>

        <div
          onClick={() => setSpread(true)}
          className={`bg-gray-100 dark:bg-gray-900 p-3 rounded-full
        ${spread && 'hidden'}
        `}>
          <Search
            size={18}
          />
        </div>

        <input
          onClick={() => setSpread(!spread)}
          placeholder="Search Fakebook"
          className={`rounded-full bg-gray-100 dark:bg-gray-700 text-md h-[40px] pl-10 font-light duration-300 outline-none focus-visible:ring-0 pr-6 opacity-0
          ${spread && 'pl-4 pr-4 w-full duration-300 opacity-100'}
          `}
        />
      </section>
    </div>
  )
}

export default Logo