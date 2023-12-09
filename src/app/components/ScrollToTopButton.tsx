"use client"

const ScrollToTopButton = () => (
    <div
        className={`
            fixed top-[100%] left-[100%]
            transition ease-in-out delay-50 
            bg-darkerForegroundGolden hover:bg-golden
            text-[3rem]
            rounded-[50%]
            px-[2rem] py-[1rem]
            cursor-pointer
            translate-x-[-150%] translate-y-[-150%]
        `}
        onClick={
            () => document
                .querySelector('body')
                ?.scroll({ left: 0, top: 0, behavior: "smooth" })}>
        ⬆
    </div >
)

export default ScrollToTopButton
