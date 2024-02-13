import { ArrowLeft, ScanFaceIcon, Search } from "lucide-react"
import { Input } from "../ui/input"
import { useState } from "react"
import { Link } from "react-router-dom";

const Logo = () => {
  const [spread, setSpread] = useState(false);

  return (
    <Link
      to='/'
      className={`flex items-center gap-4 pl-4 flex-1 
    ${spread && 'pl-0 flex-1'}
    `}>
      <ScanFaceIcon
        size={40}
        className={`text-teal-500
        ${spread && 'hidden'}
        `}
      />

      {/* SEARCH BOX */}
      <section className={`flex items-center relative
      ${spread && 'px-4 bg-white dark:bg-gray-900 h-[500px] w-[340px] shadow-md'}
      `}>
        <Search
          size={18}
          className={`absolute left-4
          ${spread && 'hidden'}
          `}
        />

        <Input
          onClick={() => setSpread(!spread)}
          placeholder="Search Fakebook"
          className={`rounded-full bg-gray-100 dark:bg-gray-700 text-md pl-10 font-light duration-300 outline-none focus-visible:ring-0
          ${spread && 'pl-4 w-full duration-300 '}
          `}
        />
      </section>
    </Link>
  )
}

export default Logo