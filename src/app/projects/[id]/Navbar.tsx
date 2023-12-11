"use client"

const Navbar = () => {
    return (
        <header className={`
            flex flex-col items-end
            sticky right-0 top-0 xl:left-0 
            z-10
            w-[100vw]
            bg-[--darker-bg-rgb]
            mb-[1rem]
        `}>
            <nav className={`
                flex flex-row justify-center
                top-0 relative
                z-10
                p-[1rem]
                gap-[3rem]
                bg-[--darker-bg-rgb]
                text-[1.5rem]
                w-full
            `}>
                <a href="/"
                    className="
                        transition ease-in-out delay-50 
                        text-center hover:text-foregroundRgbImportant
                    ">
                    Home
                </a>
            </nav>
        </header>
    )
}

export default Navbar
