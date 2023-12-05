import TitledSection from "./TitledSection"

interface Skill {
    title: string
    experience?: number
}

const FlexLi: React.FunctionComponent<{ children: any }> = ({ children }) => (
    <li className="w-full">
        <span className="w-[calc(100%-10px)] gap-[10px] inline-flex items-center justify-between">
            {children}
        </span>
    </li>
)

export const Skill = ({ title, experience }: Skill) => (
    <span className={`
        inline-block
        transition ease-in-out delay-50 
        bg-lightSafeAlternate hover:bg-foregroundRgbImportant
        text-[1rem] hover:text-black
        border-[1px] border-solid border-[--foreground-rgb-important]
        p-[0.7rem] m-[0.2rem]
        rounded-[20px]
        cursor-pointer
    `}>
        <div className="text-center" style={{
            textDecorationLine: experience ? "underline" : "none"
        }}>
            {title}
        </div>
        {experience && (
            <ul>
                <FlexLi>
                    <span>Years:</span>
                    <span>{experience}</span>
                </FlexLi>
                <FlexLi>
                    Level
                    <meter className="text-[2rem]" min={0} max={8} low={1} high={2} value={experience} />
                </FlexLi>
            </ul>
        )}
    </span>
)

interface Skills {
    technicalSkills: {
        title: string,
        experience: number
    }[]
    softSkills: string[]
}

export const Skills = (skills: Skills) => (
    <div id="skills" className="flex flex-col xl:flex-row">
        <div className="flex-1">
            <TitledSection title="Technical skills">
                <div className="flex flex-wrap justify-evenly gap-[0.5rem]">
                    {skills.technicalSkills.map(({ title, experience }) =>
                        <Skill key={title} title={title} experience={experience} />)}
                </div>
            </TitledSection >
        </div>
        <div className="flex-1">
            <TitledSection title="Soft skills">
                <div className="flex flex-wrap justify-center gap-[0.25rem]">
                    {skills.softSkills.map(skill => <Skill key={skill} title={skill} />)}
                </div>
            </TitledSection >
        </div>
    </div>
)
