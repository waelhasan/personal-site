import { Important } from "@/components/Important"
import Article from "./Article"
import { IExperience } from "./types"

const Timeline = ({ id, title, elements }: { id: string, title: string, elements: IExperience[] }) => (
    <section id={id} className="w-full p-[1rem] max-w-4xl">
        <h1 className={`
            absolute left-[50%] -translate-x-1/2
            rounded-[50%] border-b-[1px] border-b-solid border-b-[--foreground-section-title-rgb]
            w-max
            p-[1rem]
        `}>
            <Important level={4} color="var(--foreground-section-title-rgb)">{title}</Important>
        </h1>
        <div id={id} className="xl:-translate-x-1/2 mx-auto p-[1rem]">
            <div className="mt-[7rem]">
                <div className={`
                flex flex-col items-end 
                p-[1rem] 
                border-r-[1px] border-r-solid border-r-[--foreground-section-title-rgb]
            `}>
                    {elements.map((experience, index) => {
                        const formatter = new Intl.DateTimeFormat('en', { month: 'short', year: "numeric" })
                        const fromDate = formatter.format(new Date(experience.from))
                        const toDate = formatter.format(new Date(experience.to))
                        const fromTo = `${fromDate} - ${toDate}`
                        return <Article key={fromTo} fromTo={fromTo} isOdd={index % 2 === 0} experience={experience} />
                    })}
                </div>
            </div>
        </div>
    </section>
)

export default Timeline
