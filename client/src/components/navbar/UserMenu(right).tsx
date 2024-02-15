interface UsermenuProps {
  dropdown: boolean;
  handleDropdown: () => void;
};

const UserMenu = ({
  dropdown,
  handleDropdown
}: UsermenuProps) => {

  return (
    <div className={`flex-1 mr-4 flex justify-end relative
    ${dropdown && 'mx-0'}
    `}>

      <img
        onClick={handleDropdown}
        src="/noavatar.jpg"
        className="w-[40px] h-[40px] rounded-full cursor-pointer"
        alt="profilePic"
      />

      <section className={dropdown ? (
        'block absolute bg-white h-[500px] dark:bg-gray-900 w-[300px] p-4 shadow-lg right-0 top-14 rounded-md'
      ) : (
        'hidden absolute bg-white h-[500px] shadow-lg right-0'
      )

      }>
        Fix
      </section>
    </div>
  )
}

export default UserMenu