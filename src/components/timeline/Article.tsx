import { Important } from "@/components/Important"
import Skill from "@/components/skills/Skill"
import LeftArticle from "./LeftArticle"
import RightArticle from "./RightArticle"
import MoreDetailsBtn from "./MoreDetailsBtn"
import { TimelineElement } from "./types"

const Article = ({
    fromTo,
    isOdd,
    experience
}: {
    fromTo: string,
    isOdd: boolean,
    experience: TimelineElement
}) => {
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
                <div className="max-w-[35rem]">
                    <h2 className="text-justify">{experience.summary}</h2>
                    {experience.skills.map(skill => <Skill key={skill} title={skill} />)}
                </div>
                {!!experience.details && <MoreDetailsBtn href={`/projects/${experience.id}`} />}
            </ParentArticle>
        </>
    )
}

export default Article
