import { FaGithub } from "react-icons/fa"
import FlippingContents from "./FlippingContents"
import IconLink from "./IconLink"
import { Important } from "./Important"

const Footer = () => (
    <div className="
        flex flex-col justify-center items-center gap-[1rem]
        text-[1.5rem] text-center
        h-[25rem]
        p-[2rem]
        bg-[--footer-bg-rg]
    ">
        <span>
            This site is built using these technologies:
        </span>
        <FlippingContents
            direction="top"
            width="12rem"
            contents={
                ["Typescript", "HTML5", "CSS3", "Reactjs", "Nextjs", 'Tailwind CSS', 'Git'].map(tool => (
                    <Important
                        key={tool}
                        color="var(--foreground-section-title-rgb)"
                        level={4}
                    >
                        {tool}
                    </Important>
                ))
            }
        />
        The code of this site is open source, feel free to take a look, and forge it if you wish
        <IconLink url="https://github.com/waelhasan/personal-site" Icon={FaGithub} fontSize="3rem" />
    </div>
)

export default Footer