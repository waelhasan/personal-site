import info from "./info"
import { Skills } from "./components/Skills"
import Intorduction from "./components/Introduction";
import ReasonsToHireMeOrNotToHireMe from "./components/ReasonsToHireMeOrNotToHireMe";
import Timeline from "./components/Timeline";

const SectionsSeparator = () =>
  <div style={{
    boxShadow: "0px 0px 20px var(--foreground-section-title-rgb)",
    borderTop: "1px solid var(--foreground-section-title-rgb)",
    width: "60%",
    margin: "2rem 0"
  }} />

export default function Home() {
  return (
    <main style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <Intorduction
        fullName={info.fullName}
        nationality={info.nationality}
        title={info.title}
        accountsLinks={info.accountsLinks}
      />
      <SectionsSeparator />
      <ReasonsToHireMeOrNotToHireMe reasonsNotToHireMe={info.reasonsNotToHireMe} reasonsToHireMe={info.reasonsToHireMe} />
      <SectionsSeparator />
      <Skills softSkills={info.softSkills} technicalSkills={info.technicalSkills} />
      <SectionsSeparator />
      <Timeline id="employment-history" title="Employment history" elements={info.experience} />
      <SectionsSeparator />
      <Timeline id="main-projects" title="Main projects" elements={info.projects} />
    </main>
  )
}
