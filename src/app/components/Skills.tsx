"use client"

import { ChangeEventHandler, FC, ReactNode, useEffect, useState } from "react"
import { Skill, ISkill } from "./Skill"
import { MultipleTitledSectioned, TitledSection } from "./TitledSection"

interface ICustomOptionProps {
    value: string
    children: ReactNode
}

const CustomOption: FC<ICustomOptionProps> = ({ value, children }) => (
    <option
        className="
            text-black 
            bg-[--lighter-safe-alternate-bg]
        "
        value={value}
    >
        {children}
    </option>
)

interface ISkillsGroupProps {
    title: string
    skills: ISkill[]
    sortByType?: boolean
}

const SkillsGroup = ({
    title,
    skills,
    sortByType = false
}: ISkillsGroupProps) => {
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
            <search className="
                w-[100%]
                flex md:inline-flex justify-center flex-col md:flex-row gap-[1rem] items-center 
                mx-auto mb-[1rem]
            ">
                <div className="
                    flex md:inline-flex justify-center flex-col md:flex-row gap-[1rem] items-center 
                    w-[80%] 
                    p-[0.5rem]
                ">
                    <label htmlFor="skill-name-filter">
                        Filter by skill name
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
                                Filter by skill type
                            </label>
                            <select
                                className="
                                    w-[70%] max-w-[10rem] 
                                    text-[--foreground-rgb] 
                                    p-[0.25rem] 
                                    rounded-[1rem]
                                    border-[1px] border-solid border-[--foreground-section-title-rgb]
                                    bg-[--lighter-safe-alternate-bg]
                                    flex md:inline-flex justify-center flex-col md:flex-row gap-[1rem] items-center
                                "
                                id="skill-type-filter"
                                value={skillTypeFilter}
                                onChange={filterBySkillType}>
                                <CustomOption value="BOTH">All</CustomOption>
                                <CustomOption value="BACKEND">Back End</CustomOption>
                                <CustomOption value="FRONTEND">Front End</CustomOption>
                            </select>
                        </>)}
                </div>
            </search>
            <div className="flex flex-wrap justify-evenly gap-[0.5rem] w-full">
                {filteredSkills.map(({ title, years, level }) =>
                    <Skill key={title} title={title} years={years} level={level} />)}
            </div>
        </TitledSection >
    )
}

interface ISkillsProps {
    technicalSkills: ISkill[]
    softSkills: ISkill[]
}

export const Skills = (skills: ISkillsProps) => (
    <MultipleTitledSectioned id="skills">
        <SkillsGroup title="Technical skills" skills={skills.technicalSkills} sortByType={true} />
        <SkillsGroup title="Soft skills" skills={skills.softSkills} />
    </MultipleTitledSectioned>
)
