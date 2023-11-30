"use client"

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

const CustomizedLink = ({ href, children }: { href: string, children: React.ReactNode }) => (
    <a href={href}
        className={`
            transition ease-in-out delay-50 
            hover:text-foregroundRgbImportant
        `}>
        {children}
    </a>
)

const Navbar = () => {
    return (
        <header style={{
            position: "sticky",
            top: 0,
            left: 0,
            zIndex: 1000,
            padding: "1rem",
            display: "flex",
            justifyContent: "center",
            gap: "3rem",
            backgroundColor: "var(--darker-bg-rgb)",
            fontSize: "1.5rem",
            margin: "0 0 1rem"
        }}>
            {/* <LanguageSwitcher /> */}
            <CustomizedLink href="#introduction">Introduction</CustomizedLink>
            <CustomizedLink href="#why-to-hire-me">Why to hire me?</CustomizedLink>
            <CustomizedLink href="#skills">Skills</CustomizedLink>
            <CustomizedLink href="#employment-history">Employment history</CustomizedLink>
            <CustomizedLink href="#main-projects">Main projects</CustomizedLink>
        </header>
    )
}

export default Navbar
