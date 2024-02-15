import { SnailIcon } from "lucide-react"
import { DropdownLogo } from "../dropdown/DrowdownLogo"
import { Link } from "react-router-dom"
import { DropdownSidebar } from "../dropdown/DropdownSidebar"


const Logo = () => {
  return (
    <div
      className="flex-1">

      <section className="flex items-center gap-4">
        <Link to='/'>
          <SnailIcon
            size={30}
            className="text-teal-500"
          />
        </Link>

        <DropdownLogo />

        <div className="max-[768px]:block hidden">
          <DropdownSidebar />
        </div>

      </section>

    </div>
  )
}

export default Logo