import { Important } from "./Important"
import { Skill } from "./Skills"

interface TimelineElement {
    title: string
    company: {
        name: string
    },
    from: string
    to: string
    summary: string
    type: string //"BACKEND" | "FONTEND" | "BOTH"
    skills: string[]
}

const Timeline = ({ id, title, elements }: { id: string, title: string, elements: TimelineElement[] }) => (
    <section
        id={id}
        style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
            fontSize: "2rem",
            margin: "2rem 0",
            transform: "translateX(-50%)"
        }}>
        <h1 style={{
            position: "absolute",
            left: "100%",
            top: "0",
            transform: "translateX(-50%)",
            borderBottom: "1px solid var(--foreground-section-title-rgb)",
            borderRadius: "50%",
            width: "max-content",
            padding: "1rem"
        }}>
            <Important level={4} color="var(--foreground-section-title-rgb)">{title}</Important>
        </h1>
        <div style={{
            display: "flex",
            flexDirection: "row",
            marginTop: "7rem"
        }}>
            <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
                borderRight: "1px solid var(--foreground-section-title-rgb)",
                padding: "1rem",
                justifyContent: "flex-start",
                flex: "1"
            }}>
                {elements.map((experience, index) => {
                    const formatter = new Intl.DateTimeFormat('en', { month: 'short', year: "numeric" });
                    const isOdd = index % 2 === 0
                    const fromDate = formatter.format(new Date(experience.from))
                    const toDate = formatter.format(new Date(experience.to))

                    const fromTo = `${fromDate} - ${toDate}`
                    return (
                        <>
                            {/* The circle in timeline */}
                            <span style={{
                                width: "1rem",
                                height: "1rem",
                                backgroundColor: "var(--foreground-section-title-rgb)",
                                border: "1px solid var(--foreground-section-title-rgb)",
                                borderRadius: "50%",
                                transform: `translate(1.5rem, 1.5rem)`
                            }} />
                            {/* The line that fills the gap between individual boxes and the timeline */}
                            <span style={{
                                width: "1rem",
                                borderTop: "1px solid var(--foreground-section-title-rgb)",
                                transform: `translate(${isOdd ? 2 : 1}rem, 1.06rem)`
                            }} />
                            {/* The box that shows element details */}
                            <article
                                key={fromTo}
                                style={{
                                    textAlign: isOdd ? "left" : "right",
                                    width: "36rem",
                                    fontSize: "1.4rem",
                                    margin: "1rem 0",
                                    padding: "1rem",
                                    border: "1px solid var(--foreground-section-title-rgb)",
                                    borderBottomRightRadius: "40px",
                                    [isOdd ? "borderTopRightRadius" : "borderTopLeftRadius"]: "40px",
                                    borderBottomLeftRadius: "40px",
                                    ...(isOdd ? { transform: "translateX(calc(100% + 2rem))" } : {}),
                                    backgroundColor: "var(--darker-bg-rgb)"
                                }}>
                                <div style={{ fontFamily: "monospace" }}>
                                    {fromTo}
                                </div>
                                <Important level={5} color="var(--darker-foreground-golden-rgb)">
                                    {experience.title}
                                </Important>
                                <br />
                                <Important level={6}>
                                    {experience.company.name + ` (${experience.type[0] + experience.type.slice(1).toLocaleLowerCase()})`}
                                </Important>
                                <details>
                                    <summary style={{ transition: "all 0.5s" }}>
                                        Read more
                                    </summary>
                                    <h2 style={{ textAlign: "justify" }}>{experience.summary}</h2>
                                    {experience.skills.map(skill => <Skill key={skill} title={skill} />)}
                                </details>
                            </article>
                        </>
                    )
                })}
            </div>
        </div>
    </section>
)

export default Timeline
