import { useEffect, useState } from "react"
import { FilterComponent, ISkill } from "./types"
import { TitledSection } from "../TitledSection"
import Skill from "./Skill"
import SkillNameFilter from "./SkillNameFilter"

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

export default SkillsGroup

