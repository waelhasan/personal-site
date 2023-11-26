import info from "./info"
import { Skills } from "./components/Skills"
import Intorduction from "./components/Intorduction";
import UnderconstructionNotice from "./components/UnderconstructionNotice";
import ReasonsToHireMeOrNotToHireMe from "./components/ReasonsToHireMeOrNotToHireMe";
import Timeline from "./components/Timeline";

export default function Home() {
  return (
    <main style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <UnderconstructionNotice />
      <Intorduction fullName={info.fullName} nationality={info.nationality} title={info.title} />
      <ReasonsToHireMeOrNotToHireMe reasonsNotToHireMe={info.reasonsNotToHireMe} reasonsToHireMe={info.reasonsToHireMe} />
      <Skills softSkills={info.softSkills} technicalSkills={info.technicalSkills} />
      <Timeline title="Employment history" elements={info.experience} />
      <Timeline title="Main projects" elements={info.projects} />
    </main>
  )
}
