"use client"

import { FaCircleArrowUp } from "react-icons/fa6";

const ScrollToTopButton = () => (
    <FaCircleArrowUp
        className="
            fixed top-[100%] left-[100%]
            text-[5rem] text-darkerForegroundGolden hover:text-golden
            translate-x-[-150%] translate-y-[-150%]
            transition ease-in-out delay-50
            cursor-pointer
        "
        onClick={
            () => document
                .querySelector('body')
                ?.scroll({ left: 0, top: 0, behavior: "smooth" })}
    />
)

export default ScrollToTopButton

