import { Important } from "./Important"

const TitledSection = ({
    title,
    danger = false,
    children
}: {
    title: string,
    danger?: boolean,
    children: React.ReactNode
}) => {
    const titleColor = danger ? "rgb(177 49 112)" : "var(--foreground-section-title-rgb)"
    return (
        <figure style={{
            position: "relative",
            border: `1px solid ${titleColor}`,
            borderRadius: "30px",
            padding: "2rem",
            margin: "2rem",
            background: `var(${danger ? '--light-danger-alternate-bg' : '--light-safe-alternate-bg'})`
        }}>
            <div style={{
                marginTop: "5rem",
                display: "flex",
                flexWrap: "wrap",
                maxWidth: "900px"
            }}>
                <figcaption style={{
                    position: "absolute",
                    left: "50%",
                    top: "1rem",
                    transform: "translateX(-50%)",
                    borderBottom: `1px solid ${titleColor}`,
                    borderRadius: "50%",
                    padding: "1.2rem 2rem"
                }}>
                    <Important level={4} color={titleColor}>{title}</Important>
                </figcaption>
                {children}
            </div>
        </figure>
    )
}

export default TitledSection
