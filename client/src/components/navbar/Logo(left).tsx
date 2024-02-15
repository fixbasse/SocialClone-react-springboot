import { SnailIcon } from "lucide-react"
import { DropdownLogo } from "../dropdown/DrowdownLogo"


const Logo = () => {
  return (
    <div className="flex-1">

      <section className="flex items-center gap-4">
        <SnailIcon
          size={30}
          className="text-teal-500"
        />

      <DropdownLogo />        
      </section>

    </div>
  )
}

export default Logo