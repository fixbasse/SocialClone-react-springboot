import { useLocation } from "react-router-dom"
import { ModeToggle } from "../mode-toggle"
import Logo from "./Logo(left)"
import Navigation from "./Navigation(center)"
import UserMenu from "./UserMenu(right)"


const Navbar = () => {
    const { pathname } = useLocation();

    return (
        <div className={pathname === '/prehome' ? 'hidden' : 'block'}>

            <nav className="flex items-center max-h-[60px] h-[60px] justify-between shadow-md">
                <Logo />
                <Navigation />
                <UserMenu />
            </nav>

            <ModeToggle />
        </div>
    )
}

export default Navbar