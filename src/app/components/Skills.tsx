import Skill from "./Skill"
import TitledSection from "./TitledSection"

interface Skills {
    technicalSkills: {
        title: string
        years: number
        level: number
    }[]
    softSkills: string[]
}

export const Skills = (skills: Skills) => (
    <div id="skills" className="flex flex-col xl:flex-row">
        <div className="flex-1">
            <TitledSection title="Technical skills">
                <div className="flex flex-wrap justify-evenly gap-[0.5rem]">
                    {skills.technicalSkills.map(({ title, years, level }) =>
                        <Skill key={title} title={title} years={years} level={level} />)}
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
