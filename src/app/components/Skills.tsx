"use client"

import { ChangeEventHandler, useCallback, useEffect, useState } from "react"
import { Skill, ISkill } from "./Skill"
import { MultipleTitledSectioned, TitledSection } from "./TitledSection"

interface ISkills {
    technicalSkills: ISkill[]
    softSkills: ISkill[]
}

const SkillsGroup = ({
    title,
    skills,
    sortByType = false
}: {
    title: string,
    skills: ISkill[],
    sortByType?: boolean
}) => {
    const [filteredSkills, setFilteredSkills] = useState(skills)
    const [skillNameFilter, setSkillNameFilter] = useState("")
    const [skillTypeFilter, setSkillTypeFilter] = useState("BOTH")

    useEffect(() => {
        setFilteredSkills(
            skills
                // Filter using skill name filter
                .filter(
                    skill => !!skillNameFilter ?
                        skill.title.toLowerCase().includes(skillNameFilter.toLowerCase()) :
                        true
                )
                // filter using type filter
                .filter(
                    skill => sortByType && !!skillTypeFilter ?
                        [
                            skillTypeFilter === "BOTH" ?
                                ["FRONTEND", "BACKEND"] :
                                skillTypeFilter,
                            "BOTH"
                        ]
                            .flat()
                            .includes(skill.type!) :
                        true
                )
        )
    }, [skillNameFilter, skillTypeFilter])

    const filterBySkillName: ChangeEventHandler<HTMLInputElement> = e => setSkillNameFilter(e.target.value)
    const filterBySkillType: ChangeEventHandler<HTMLSelectElement> = e => setSkillTypeFilter(e.target.value)

    return (
        <TitledSection title={title}>
            <search className="">
                <fieldset className="
                    flex md:inline-flex justify-center flex-col md:flex-row gap-[1rem] items-center 
                    w-[100%] 
                    mx-auto mb-[1rem]
                    p-[0.5rem]
                    border-[1px] border-solid border-[--foreground-rgb-important]
                ">
                    <legend>
                        Filter
                    </legend>
                    <label htmlFor="skill-name-filter">
                        Search by skill name
                    </label>
                    <input
                        id="skill-name-filter"
                        type="search"
                        className="
                            w-[70%] max-w-[15rem] 
                            text-[--foreground-rgb] 
                            p-[0.5rem] 
                            rounded-[1rem]
                            border-[1px] border-solid border-[--foreground-section-title-rgb]
                            bg-[--lighter-safe-alternate-bg]
                        "
                        value={skillNameFilter}
                        onChange={filterBySkillName}
                        placeholder="Enter skill name" />
                    {sortByType && (
                        <>
                            <label htmlFor="skill-type-filter">
                                Search by skill name
                            </label>
                            <select
                                id="skill-type-filter"
                                value={skillTypeFilter}
                                onChange={filterBySkillType}
                                className="
                            flex md:inline-flex justify-center flex-col md:flex-row gap-[1rem] items-center
                            mb-[1rem]
                        ">
                                <option value="BOTH">All</option>
                                <option value="BACKEND">Back End</option>
                                <option value="FRONTEND">Front End</option>
                            </select>
                        </>)}
                </fieldset>
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
        <SkillsGroup title="Technical skills" skills={skills.technicalSkills} sortByType={true} />
        <SkillsGroup title="Soft skills" skills={skills.softSkills} />
    </MultipleTitledSectioned>
)
