"use client"

const ScrollToTopButton = () => (
    <div style={{
        float: "right",
        position: "fixed",
        top: "100%",
        left: "100%",
        fontSize: "3rem",
        borderRadius: "50%",
        background: "var(--darker-foreground-golden-rgb)",
        padding: "1rem 2rem",
        transform: "translate(-150%, -150%)",
        cursor: "pointer"
    }}
        onClick={() => document.querySelector('body')?.scroll({ left: 0, top: 0, behavior: "smooth" })}>
        ⬆
    </div >
)

export default ScrollToTopButton
