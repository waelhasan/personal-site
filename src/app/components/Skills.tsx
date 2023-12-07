import { Skill, ISkill } from "./Skill"
import TitledSection from "./TitledSection"

interface ISkills {
    technicalSkills: ISkill[]
    softSkills: ISkill[]
}

const SkillsGroup = ({ title, skills }: { title: string, skills: ISkill[] }) => (
    <div className="flex-1">
        <TitledSection title={title}>
            <div className="flex flex-wrap justify-evenly gap-[0.5rem]">
                {skills.map(({ title, years, level }) =>
                    <Skill key={title} title={title} years={years} level={level} />)}
            </div>
        </TitledSection >
    </div>
)

export const Skills = (skills: ISkills) => (
    <div id="skills" className="flex flex-col xl:flex-row">
        <SkillsGroup title="Technical skills" skills={skills.technicalSkills} />
        <SkillsGroup title="Soft skills" skills={skills.softSkills} />
    </div>
)
