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
            <a href="#introduction">Introduction</a>
            <a href="#why-to-hire-me">Why to hire me?</a>
            <a href="#skills">Skills</a>
            <a href="#employment-history">Employment history</a>
            <a href="#main-projects">Main projects</a>
        </header>
    )
}

export default Navbar
