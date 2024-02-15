import { Home, PersonStanding, Presentation, VideoIcon } from "lucide-react"
import { Link, useLocation } from "react-router-dom"

export const navlinks = [
  {
    href: '/',
    logo: <Home />,
    label: 'Home',
  },
  {
    href: '/market',
    logo: <VideoIcon />,
    label: 'Video',

  },
  {
    href: '/group',
    logo: <Presentation />,
    label: 'Group',
  },
  {
    href: '/game',
    logo: <PersonStanding />,
    label: 'Game',
  },
];

const Navigation = () => {
  const { pathname } = useLocation();

  return (
    <div className="flex-1 hidden md:flex items-center gap-2 justify-between">

      {navlinks.map((item) => (
        <Link
          key={item.href}
          to={item.href}
          className={`hover:bg-primary-foreground duration-300 cursor-pointer flex items-center justify-center py-3 w-full rounded-xl
        ${item.href === pathname && 'text-teal-500 bg-primary-foreground duration-300'}
        `}>
          {item.logo}
        </Link>
      ))}

    </div>
  )
}

export default Navigation