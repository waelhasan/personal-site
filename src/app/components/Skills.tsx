"use client"

import { ChangeEventHandler, useCallback, useState } from "react"
import { Skill, ISkill } from "./Skill"
import { MultipleTitledSectioned, TitledSection } from "./TitledSection"

interface ISkills {
    technicalSkills: ISkill[]
    softSkills: ISkill[]
}

const SkillsGroup = ({ title, skills }: { title: string, skills: ISkill[] }) => {
    const [filteredSkills, setFilteredSkills] = useState(skills)
    const [filter, setFilter] = useState("")

    const filterBySkillName: ChangeEventHandler<HTMLInputElement> = useCallback(e => {
        const value = e.target.value

        setFilter(value)
        setFilteredSkills(
            skills.filter(
                skill => !!value ?
                    skill.title.toLowerCase().includes(e.target.value.toLowerCase()) :
                    true
            )
        )
    }, [])

    return (
        <TitledSection title={title}>
            <search className="
                    flex justify-center flex-col md:flex-row gap-[1rem] items-center
                    mb-[1rem]
                ">
                <label htmlFor="skills-search">
                    Search by skill name
                </label>
                <input
                    id="skil"
                    type="search"
                    className="
                            w-[70%] max-w-[15rem] 
                            text-[--foreground-rgb] 
                            p-[0.5rem] 
                            rounded-[1rem]
                            border-[1px] border-solid border-[--foreground-section-title-rgb]
                            bg-[--lighter-safe-alternate-bg]
                        "
                    value={filter}
                    onChange={filterBySkillName}
                    placeholder="Enter skill name" />
            </search>
            <div className="flex flex-wrap justify-evenly gap-[0.5rem] w-full">
                {filteredSkills.map(({ title, years, level }) =>
                    <Skill key={title} title={title} years={years} level={level} />)}
            </div>
        </TitledSection >
    )
}

export const Skills = (skills: ISkills) => (
    <MultipleTitledSectioned id="skills">
        <SkillsGroup title="Technical skills" skills={skills.technicalSkills} />
        <SkillsGroup title="Soft skills" skills={skills.softSkills} />
    </MultipleTitledSectioned>
)
