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

type FilterComponent = (props: {
    addFilterFn: (key: string, fn: (skills: ISkill) => boolean) => void,
}) => ReactNode

const SkillNameFilter: FilterComponent = ({ addFilterFn }) => {
    const [filterValue, setFilterValue] = useState("")

    useEffect(() => {
        addFilterFn('SkillNameFilter', (skill: ISkill) => !!filterValue ?
            skill.title.toLowerCase().includes(filterValue.toLowerCase()) :
            true
        )
    }, [filterValue])

    const filterBySkillName: ChangeEventHandler<HTMLInputElement> = e => setFilterValue(e.target.value)

    return (
        <>
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
                value={filterValue}
                onChange={filterBySkillName}
                placeholder="Enter skill name" />
        </>
    )
}

const SkillTypeFilter: FilterComponent = ({ addFilterFn }) => {
    const [filterValue, setFilterValue] = useState("BOTH")

    useEffect(() => {
        addFilterFn('SkillTypeFilter', (skill: ISkill) => !!filterValue ?
            [
                filterValue === "BOTH" ?
                    ["FRONTEND", "BACKEND"] :
                    filterValue,
                "BOTH"
            ]
                .flat()
                .includes(skill.type!) :
            true
        )
    }, [filterValue])

    const filterBySkillType: ChangeEventHandler<HTMLSelectElement> = e => setFilterValue(e.target.value)

    return (
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
                value={filterValue}
                onChange={filterBySkillType}>
                <CustomOption value="BOTH">All</CustomOption>
                <CustomOption value="BACKEND">Back End</CustomOption>
                <CustomOption value="FRONTEND">Front End</CustomOption>
            </select>
        </>
    )
}

interface ISkillsGroupProps {
    title: string
    skills: ISkill[]
    FilterComponents?: FilterComponent[]
}

type FilterFunction = (skills: ISkill) => boolean

const SkillsGroup = ({
    title,
    skills,
    FilterComponents
}: ISkillsGroupProps) => {
    const [filteredSkills, setFilteredSkills] = useState(skills)
    const [filterFunctions, setFilterFunctions] = useState<{ [key: string]: FilterFunction }>({})

    const AllFilterComponents = [SkillNameFilter, ...(FilterComponents || [])]
    const addFilterFn = (key: string, fn: FilterFunction) => setFilterFunctions(fns => ({ ...fns, [key]: fn }))

    useEffect(() => {
        let newSkills: ISkill[] = skills
        for (let ff of Object.values(filterFunctions)) {
            newSkills = newSkills.filter(ff)
        }
        setFilteredSkills(newSkills)
    }, [filterFunctions])

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
                    {AllFilterComponents.map(
                        (FilterComponent, index) =>
                            <FilterComponent key={index} addFilterFn={addFilterFn} />
                    )}
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
        <SkillsGroup title="Technical skills" skills={skills.technicalSkills} FilterComponents={[SkillTypeFilter]} />
        <SkillsGroup title="Soft skills" skills={skills.softSkills} />
    </MultipleTitledSectioned>
)
