import { FaGithub } from "react-icons/fa"
import FlippingContents from "./FlippingContents"
import IconLink from "./IconLink"
import { Important } from "./Important"

const Footer = () => (
    <div style={{
        backgroundColor: "var(--footer-bg-rg)",
        height: "25rem",
        fontSize: "1.5rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "1rem",
        padding: "2rem",
        textAlign: "center"
    }}>
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