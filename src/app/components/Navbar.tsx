"use client"

export default () => {
    return (
        <header style={{ padding: "10px" }}>
            <select
                style={{
                    color: "rgb(var(--foreground-rgb))",
                    backgroundColor: "rgb(var(--background-end-rgb))",
                    border: "1px solid rgb(var(--foreground-rgb))",
                    padding: "1rem",
                    float: "right"
                }}
                onChange={(e) => { console.log(e.target.value) }}>
                <option style={{ padding: "1rem" }} selected value="ar">العربية</option>
                <option value="en">English</option>
            </select>
        </header>
    )
} 