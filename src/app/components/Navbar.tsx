"use client"

const LanguageSwitcher = () => (
    <select
        style={{
            color: "rgb(var(--foreground-rgb))",
            backgroundColor: "rgb(var(--background-start-rgb))",
            border: "1px solid rgb(var(--foreground-rgb))",
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
        <header style={{ padding: "10px" }}>
            <LanguageSwitcher />
        </header>
    )
}

export default Navbar
