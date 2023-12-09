"use client"

import { ISkill } from "./types"
import { MultipleTitledSectioned } from "../TitledSection"
import SkillsGroup from "./SkillsGroup"
import SkillTypeFilter from "./SkillTypeFilter"

interface ISkillsProps {
    technicalSkills: ISkill[]
    softSkills: ISkill[]
}

export const Skills = (skills: ISkillsProps) => (
    <MultipleTitledSectioned id="skills">
        <SkillsGroup title="Technical skills" skills={skills.technicalSkills} FilterComponents={[SkillTypeFilter]} />
        <SkillsGroup title="Soft skills" skills={skills.softSkills} />
    </MultipleTitledSectioned>
)
