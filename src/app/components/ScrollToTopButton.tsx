"use client"

const ScrollToTopButton = () => (
    <div
        className={`
            transition ease-in-out delay-50 
            bg-darkerForegroundGolden hover:bg-golden
        `}
        style={{
            position: "fixed",
            top: "100%",
            left: "100%",
            fontSize: "3rem",
            borderRadius: "50%",
            padding: "1rem 2rem",
            transform: "translate(-150%, -150%)",
            cursor: "pointer"
        }}
        onClick={() => document.querySelector('body')?.scroll({ left: 0, top: 0, behavior: "smooth" })}>
        ⬆
    </div >
)

export default ScrollToTopButton
