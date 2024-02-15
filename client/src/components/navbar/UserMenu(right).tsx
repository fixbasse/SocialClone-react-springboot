import { DropdownUserMenu } from "../dropdown/DropdownUserMenu";
import { ModeToggle } from "../mode-toggle";


const UserMenu = () => {

  return (
    <div className={`flex-1 flex gap-4 justify-end relative
  
    `}>

      <div className="hidden md:block">
        <ModeToggle />
      </div>


      <DropdownUserMenu />

      {/* <section className={dropdown ? (
        'block absolute bg-white h-[500px] dark:bg-gray-900 w-[300px] p-4 shadow-lg right-0 top-14 rounded-md'
      ) : (
        'hidden absolute bg-white h-[500px] shadow-2xl right-0'
      )

      }>
        Fix
      </section> */}
    </div>
  )
}

export default UserMenu