import TitledSection from "./TitledSection"

interface Skill {
    title: string
}

export const Skill = ({ title }: Skill) => (
    <span
        className={`
            transition ease-in-out delay-50 
            bg-lightSafeAlternate hover:bg-foregroundRgbImportant
            hover:text-black
        `}
        style={{
            display: "inline-block",
            fontSize: "1rem",
            fontStyle: "italic",
            border: "1px solid var(--foreground-rgb-important)",
            padding: "1rem",
            margin: "10px 10px",
            borderRadius: "10px",
            cursor: "pointer"
        }}>
        {title}
    </span>
)

interface Skills {
    technicalSkills: string[]
    softSkills: string[]
}

export const Skills = (skills: Skills) => (
    <div
        id="skills"
        style={{
            display: "flex"
        }}
    >
        <div style={{ flex: 1 }}>
            <TitledSection title="Technical skills">
                {skills.technicalSkills.map(skill => <Skill key={skill} title={skill} />)}
            </TitledSection >
        </div>
        <div style={{ flex: 1 }}>
            <TitledSection title="Soft skills">
                {skills.softSkills.map(skill => <Skill key={skill} title={skill} />)}
            </TitledSection >
        </div>
    </div>
)
