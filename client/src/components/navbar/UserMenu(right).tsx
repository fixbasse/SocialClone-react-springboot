import { ModeToggle } from "../mode-toggle";

interface UsermenuProps {
  dropdown: boolean;
  handleDropdown: () => void;
};

const UserMenu = ({
  dropdown,
  handleDropdown
}: UsermenuProps) => {

  return (
    <div className={`flex-1 mr-4 flex gap-4 justify-end relative
    ${dropdown && 'mx-0'}
    `}>

      <div className="hidden md:block">
        <ModeToggle />
      </div>

      <img
        onClick={handleDropdown}
        src="/noavatar.jpg"
        className="w-[40px] h-[40px] rounded-full cursor-pointer"
        alt="profilePic"
      />

      <section className={dropdown ? (
        'block absolute bg-white h-[500px] dark:bg-gray-900 w-[300px] p-4 shadow-lg right-0 top-14 rounded-md'
      ) : (
        'hidden absolute bg-white h-[500px] shadow-2xl right-0'
      )

      }>
        Fix
      </section>
    </div>
  )
}

export default UserMenu