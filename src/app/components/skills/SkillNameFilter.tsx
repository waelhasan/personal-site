import { ChangeEventHandler, useEffect, useState } from "react"
import { FilterComponent, ISkill } from "./types"

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

export default SkillNameFilter
