import {
    Cloud,
    Github,
    LifeBuoy,
    LogOut,
    Menu,
    Plus,
} from "lucide-react"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { navlinks } from "../navbar/Navigation(center)"
import { Link, useLocation } from "react-router-dom"

export function DropdownSidebar() {
    const { pathname } = useLocation();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <div className="h-[40px] w-[50px] cursor-pointer flex items-center justify-center bg-primary-foreground rounded-lg">
                    <Menu
                        className="h-full"
                    />
                </div>
            </DropdownMenuTrigger>

            <DropdownMenuContent className="w-screen h-screen md:hidden bg-primary-foreground">
                <DropdownMenuGroup>
                    <DropdownMenuItem>
                        <img
                            src="/noavatar.jpg"
                            className="mr-2 w-[30px] h-[30px] rounded-full cursor-pointer"
                            alt="profilePic"
                        />
                        <span>Wongsapat Sungsean</span>
                    </DropdownMenuItem>

                    <DropdownMenuItem className="">
                        {navlinks.map((item) => (
                            <Link
                                key={item.href}
                                to={item.href}
                                className={`duration-300 cursor-pointer flex items-center justify-center py-3 w-full rounded-xl
                             ${item.href === pathname && 'text-teal-500 bg-primary-foreground duration-300'}
                    `}>
                                {item.logo}
                            </Link>
                        ))}
                    </DropdownMenuItem>











                    <DropdownMenuItem>
                        <Plus size={30} className="mr-2" />
                        <span>New Team</span>
                        <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    <Github size={30} className="mr-2" />
                    <span>GitHub</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <LifeBuoy size={30} className="mr-2" />
                    <span>Support</span>
                </DropdownMenuItem>
                <DropdownMenuItem disabled>
                    <Cloud size={30} className="mr-2" />
                    <span>API</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    <LogOut size={30} className="mr-2" />
                    <span>Log out</span>
                    <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
