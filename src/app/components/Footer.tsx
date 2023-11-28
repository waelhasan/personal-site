import FlippingContents from "./FlippingContents"
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
        gap: "1rem"
    }}>
        <span>
            This site is built using these technologies:
        </span>
        <FlippingContents
            direction="top"
            width="12rem"
            contents={
                ["Typescript", "HTML5", "CSS3", "Reactjs", "Nextjs"].map(tool => (
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
    </div>
)

export default Footer