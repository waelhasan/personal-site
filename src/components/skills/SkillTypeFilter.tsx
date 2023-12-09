import { ChangeEventHandler, FC, ReactNode, useEffect, useState } from "react"
import { FilterComponent, ISkill } from "./types"

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

export default SkillTypeFilter
