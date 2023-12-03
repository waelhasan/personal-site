import { Important } from "./Important"
import { Skill } from "./Skills"

const RightArticle = ({ children }: { children: React.ReactNode }) => (
    <>
        {/* The line that fills the gap between individual boxes and the timeline */}
        <span className={`
            w-[1rem] 
            border-[1px] border-solid border-[--foreground-section-title-rgb] 
            translate-y-[1.11rem] translate-x-[1rem] xl:translate-x-[2rem]
        `} />
        {/* The box that shows element details */}
        <article className={`
            xl:w-fit w-[95%] max-w-fit
            text-[1.4rem]
            my-[1rem] mx-0
            py-[1rem] pl-[2rem] xl:px-[1rem]
            border-[1px] border-solid border-[--foreground-section-title-rgb] rounded-b-[40px]
            bg-[--darker-bg-rgb]
            rounded-tl-[40px] xl:rounded-tl-none xl:rounded-tr-[40px]
            xl:translate-x-[calc(100%+2rem)]
        `}>
            {children}
        </article>
    </>
)

const LeftArticle = ({ children }: { children: React.ReactNode }) => (
    <>
        {/* The line that fills the gap between individual boxes and the timeline */}
        <span className={`
            w-[1rem] 
            border-[1px] border-solid border-[--foreground-section-title-rgb] 
            translate-x-[1rem] translate-y-[1.11rem]
        `} />
        {/* The box that shows element details */}
        <article className={`
            xl:w-fit w-[95%] max-w-fit
            text-[1.4rem]
            my-[1rem] mx-0
            py-[1rem] pl-[2rem]
            p-[1rem]
            border-[1px] border-solid border-[--foreground-section-title-rgb] rounded-b-[40px]
            bg-[--darker-bg-rgb]
            xl:text-right
            rounded-tl-[40px]
        `}>
            {children}
        </article>
    </>
)

interface TimelineElement {
    title: string
    company: {
        name: string
    },
    from: string
    to: string
    summary: string
    type: string //"BACKEND" | "FONTEND" | "BOTH"
    skills: string[]
}

const Article = ({ fromTo, isOdd, experience }: { fromTo: string, isOdd: boolean, experience: TimelineElement }) => {
    const ParentArticle = isOdd ? LeftArticle : RightArticle
    return (
        <>
            {/* The circle in timeline */}
            <span className={`
                translate-x-[1.5rem] translate-y-[1.7rem]
                w-[1rem] h-[1rem]
                bg-[--foreground-section-title-rgb]
                border-[1px] border-solid rounded-[50%]
            `} />
            <ParentArticle>
                <div className="font-mono">
                    {fromTo}
                </div>
                <Important level={4} color="var(--darker-foreground-golden-rgb)">
                    {experience.title}
                </Important>
                <br />
                <Important level={5}>
                    {experience.company.name + ` (${experience.type[0] + experience.type.slice(1).toLocaleLowerCase()})`}
                </Important>
                <details className="max-w-[35rem]">
                    <summary>
                        Read more
                    </summary>
                    <h2 className="text-justify">{experience.summary}</h2>
                    {experience.skills.map(skill => <Skill key={skill} title={skill} />)}
                </details>
            </ParentArticle>
        </>
    )
}

const Timeline = ({ id, title, elements }: { id: string, title: string, elements: TimelineElement[] }) => (
    <section id={id} className="w-full p-[1rem]">
        <h1 className={`
            absolute left-[50%] -translate-x-1/2
            rounded-[50%] border-b-[1px] border-b-solid border-b-[foreground-section-title-rgb]
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
