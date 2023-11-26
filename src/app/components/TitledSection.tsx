import { Important } from "./Important"

const TitledSection = ({
    title,
    titleColor = "var(--foreground-section-title-rgb)",
    children
}: {
    title: string,
    titleColor?: string,
    children: React.ReactNode
}) => (
    <figure style={{
        position: "relative",
        border: `1px solid ${titleColor}`,
        borderRadius: "30px",
        padding: "2rem",
        margin: "2rem"
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

export default TitledSection
