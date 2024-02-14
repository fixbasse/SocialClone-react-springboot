import { Home, PersonStanding, Presentation, VideoIcon } from "lucide-react"
import { Link, useLocation } from "react-router-dom"

const navlinks = [
  {
    href: '/',
    logo: <Home />
  },
  {
    href: '/market',
    logo: <VideoIcon />
  },
  {
    href: '/group',
    logo: <Presentation />
  },
  {
    href: '/game',
    logo: <PersonStanding />
  },
];

const Navigation = () => {
  const { pathname } = useLocation();

  return (
    <div className="flex-1 hidden md:flex items-center justify-between mx-4">

      {navlinks.map((item) => (
        <Link
          key={item.href}
          to={item.href}
          className={`hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer flex items-center justify-center py-3 w-full rounded-xl
        ${item.href === pathname && 'text-teal-500'}
        `}>
          {item.logo}
        </Link>
      ))}

      {/* <Link to='/1'
        className="hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer flex items-center justify-center py-3 w-full rounded-xl">
        <VideoIcon />
      </Link>
      <Link to='/2'
        className="hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer flex items-center justify-center py-3 w-full rounded-xl">
        <Presentation />
      </Link>
      <Link to='/3'
        className="hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer flex items-center justify-center py-3 w-full rounded-xl">
        <PersonStanding />
      </Link> */}

    </div>
  )
}

export default Navigation