import { useLocation } from "react-router-dom"

import Logo from "./Logo(left)"
import Navigation from "./Navigation(center)"
import UserMenu from "./UserMenu(right)"

const Navbar = () => {
    const { pathname } = useLocation();

    return (
        <nav className={pathname === '/prehome'
            ? 'hidden items-center max-h-[60px] h-[60px] justify-between px-4 gap-4'
            : 'flex items-center max-h-[60px] h-[60px] justify-between px-4 gap-4'
        }>
            <Logo />
            <Navigation />
            <UserMenu />
        </nav>
    )
}

export default Navbar