"use client"

import { useLayoutEffect, useState } from "react"
import { CiMenuBurger } from "react-icons/ci"

const LanguageSwitcher = () => (
    <select
        style={{
            color: "var(--foreground-rgb)",
            backgroundColor: "var(--background-start-rgb)",
            border: "1px solid var(--foreground-decoration-rgb)",
            borderRadius: "10px",
            padding: "1rem",
            float: "right"
        }}
        defaultValue="ar"
        onChange={(e) => { console.log(e.target.value) }}>
        <option style={{ padding: "1rem" }} value="ar">العربية</option>
        <option value="en">English</option>
    </select>
)

const CustomizedLink = ({
    href,
    onClick,
    children
}: {
    href: string,
    onClick: () => void
    children: React.ReactNode
}) => (
    <a href={href}
        className={`
            transition ease-in-out delay-50 
            text-center hover:text-foregroundRgbImportant
        `}
        onClick={onClick}>
        {children}
    </a>
)

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(true)
    const toggleOpen = () => setIsOpen(isOpen => !isOpen)

    useLayoutEffect(() => {
        setIsOpen(window.innerWidth > 1024)
    }, [])

    return (
        <header className={`
            flex flex-col items-end
            sticky right-0 top-0 lg:left-0 
            z-10
            w-full
            bg-[--darker-bg-rgb]
        `}>
            <CiMenuBurger
                className="block lg:hidden text-[3.5rem] p-[0.5rem]"
                onClick={toggleOpen}
            />
            {isOpen &&
                <nav className={`
                    flex flex-col lg:flex-row justify-center
                    absolute top-[3.5rem] lg:top-0 lg:relative
                    z-10
                    p-[1rem]
                    gap-[3rem]
                    bg-[--darker-bg-rgb]
                    text-[1.5rem]
                    w-full
                `}>
                    {/* <LanguageSwitcher /> */}
                    <CustomizedLink href="#introduction" onClick={toggleOpen}>
                        Introduction
                    </CustomizedLink>
                    <CustomizedLink href="#why-to-hire-me" onClick={toggleOpen}>
                        Why to hire me?
                    </CustomizedLink>
                    <CustomizedLink href="#skills" onClick={toggleOpen}>
                        Skills
                    </CustomizedLink>
                    <CustomizedLink href="#employment-history" onClick={toggleOpen}>
                        Employment history
                    </CustomizedLink>
                    <CustomizedLink href="#main-projects" onClick={toggleOpen}>
                        Main projects
                    </CustomizedLink>
                </nav>
            }
        </header>
    )
}

export default Navbar
