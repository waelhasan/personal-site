import TitledSection from "./TitledSection"

interface Skill {
    title: string
}

export const Skill = ({ title }: Skill) => (
    <span
        className={`
            inline-block
            transition ease-in-out delay-50 
            bg-lightSafeAlternate hover:bg-foregroundRgbImportant
            italic text-[1rem] hover:text-black
            border-[1px] border-solid border-[--foreground-rgb-important]
            p-[0.7rem] m-[0.2rem]
            rounded-[20px]
            cursor-pointer
        `}>
        {title}
    </span>
)

interface Skills {
    technicalSkills: string[]
    softSkills: string[]
}

export const Skills = (skills: Skills) => (
    <div id="skills" className="flex flex-col xl:flex-row">
        <div className="flex-1">
            <TitledSection title="Technical skills">
                {skills.technicalSkills.map(skill => <Skill key={skill} title={skill} />)}
            </TitledSection >
        </div>
        <div className="flex-1">
            <TitledSection title="Soft skills">
                {skills.softSkills.map(skill => <Skill key={skill} title={skill} />)}
            </TitledSection >
        </div>
    </div>
)
