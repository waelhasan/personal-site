import { MultipleTitledSectioned, TitledSection } from "./TitledSection";

const ReasonsList = ({ reasons }: { reasons: string[] }) => (
    <ul className="py-0 px-[1rem]">
        {reasons.map(reason =>
            <li key={reason} className="text-[1.5rem] list-[circle]">
                {reason}
            </li>)
        }
    </ul>
)

interface ReasonsToHireMeOrNotToHireMeProps {
    reasonsToHireMe: string[]
    reasonsNotToHireMe: string[]
}

const ReasonsToHireMeOrNotToHireMe = ({ reasonsNotToHireMe, reasonsToHireMe }: ReasonsToHireMeOrNotToHireMeProps) => (
    <MultipleTitledSectioned id="why-to-hire-me">
        <TitledSection title="Why to you hire me?">
            <ReasonsList reasons={reasonsToHireMe} />
        </TitledSection >
        <TitledSection title="Why not to hire me?" danger={true}>
            <ReasonsList reasons={reasonsNotToHireMe} />
        </TitledSection >
    </MultipleTitledSectioned>
)

export default ReasonsToHireMeOrNotToHireMe
