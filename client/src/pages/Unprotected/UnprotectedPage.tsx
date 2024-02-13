import { ModeToggle } from "@/components/mode-toggle"
import Left from "./Left"
import Right from "./Right"
import Footer from "./Footer"


const UnprotectedPage = () => {
    return (
        <>
            <div className="flex flex-col md:flex-row items-center justify-center max-[375px]:gap-4 gap-8 h-[100dvh] max-[375px]:p-4 p-8 md:px-40">
                <div className="md:absolute left-2 top-2">
                    <ModeToggle />
                </div>

                <Left />
                <Right />
            </div>

            <Footer />
        </>
    )
}

export default UnprotectedPage