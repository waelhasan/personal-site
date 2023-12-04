import TitledSection from "./TitledSection"

interface Skill {
    title: string
    years?: number
}

export const Skill = ({ title, years }: Skill) => (
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
        {title}
        {years && (
            <>
                <br />
                <meter className="text-[2rem]" min={0} max={8} low={1} high={2} value={years} />
            </>
        )}
    </span>
)

interface Skills {
    technicalSkills: {
        title: string,
        years: number
    }[]
    softSkills: string[]
}

export const Skills = (skills: Skills) => (
    <div id="skills" className="flex flex-col xl:flex-row">
        <div className="flex-1">
            <TitledSection title="Technical skills">
                <div className="flex flex-wrap justify-evenly">
                    {skills.technicalSkills.map(({ title, years }) =>
                        <Skill key={title} title={title} years={years} />)}
                </div>
            </TitledSection >
        </div>
        <div className="flex-1">
            <TitledSection title="Soft skills">
                {skills.softSkills.map(skill => <Skill key={skill} title={skill} />)}
            </TitledSection >
        </div>
    </div>
)
