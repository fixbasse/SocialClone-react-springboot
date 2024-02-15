import {
    useCallback,
    useState
} from "react"
import { useLocation } from "react-router-dom"
import { ModeToggle } from "../mode-toggle"

import Logo from "./Logo(left)"
import Navigation from "./Navigation(center)"
import UserMenu from "./UserMenu(right)"


const Navbar = () => {
    const { pathname } = useLocation();
    const [spread, setSpread] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    const handleSpread = useCallback(() => {
        setSpread(!spread);
        setDropdown(false);

        //console.log(spread);
    }, [spread, setSpread]);

    const handleDropdown = useCallback(() => {
        setDropdown(!dropdown);
        setSpread(false);

        //console.log(dropdown);
    }, [dropdown, setDropdown]);

    return (
        <div className={pathname === '/prehome' ? 'hidden' : 'block'}>

            <nav className="flex items-center max-h-[60px] h-[60px] justify-between shadow-md">
                <Logo
                    spread={spread}
                    handleSpread={handleSpread}
                />
                <Navigation />
                <UserMenu
                    dropdown={dropdown}
                    handleDropdown={handleDropdown}
                />
            </nav>

            <ModeToggle />
        </div>
    )
}

export default Navbar