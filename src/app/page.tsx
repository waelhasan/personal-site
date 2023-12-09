import info from "./info"
import { Skills } from "../components/skills/Skills"
import Intorduction from "../components/Introduction"
import ReasonsToHireMeOrNotToHireMe from "../components/ReasonsToHireMeOrNotToHireMe"
import Timeline from "../components/Timeline"
import { ISkill } from "../components/skills/types"

const SectionsSeparator = () =>
  <div className="
    border-t-[1px] border-t-solid border-t-[--foreground-section-title-rgb]
    w-[60%]
    my-[2rem] mx-0
    shadow-[0_0_20px_var(--foreground-section-title-rgb)]
  "/>

export default function Home() {
  return (
    <main className="
      flex flex-col justify-center items-center
      max-w-[2000px]
      my-0 mx-auto
    ">
      <Intorduction
        fullName={info.fullName}
        nationality={info.nationality}
        title={info.title}
        accountsLinks={info.accountsLinks}
      />
      <ReasonsToHireMeOrNotToHireMe
        reasonsNotToHireMe={info.reasonsNotToHireMe}
        reasonsToHireMe={info.reasonsToHireMe}
      />
      <Skills softSkills={info.softSkills} technicalSkills={info.technicalSkills as ISkill[]} />
      <SectionsSeparator />
      <Timeline id="employment-history" title="Employment history" elements={info.experience} />
      <SectionsSeparator />
      <Timeline id="main-projects" title="Main projects" elements={info.projects} />
    </main>
  )
}
