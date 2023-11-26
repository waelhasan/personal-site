import info from "./info"
import { Skills } from "./components/Skills"
import Intorduction from "./components/Intorduction";
import UnderconstructionNotice from "./components/UnderconstructionNotice";
import ReasonsToHireMeOrNotToHireMe from "./components/ReasonsToHireMeOrNotToHireMe";
import Experiences from "./components/Experiences";

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
      <Experiences experience={info.experience} />
    </main>
  )
}
