import { MultipleTitledSectioned, TitledSection } from "./TitledSection";

interface ReasonsToHireMeOrNotToHireMeProps {
    reasonsToHireMe: string[]
    reasonsNotToHireMe: string[]
}

const ReasonsToHireMeOrNotToHireMe = ({ reasonsNotToHireMe, reasonsToHireMe }: ReasonsToHireMeOrNotToHireMeProps) => (
    <MultipleTitledSectioned id="why-to-hire-me">
        <TitledSection title="Why to you hire me?">
            <ul style={{ padding: "0 1rem" }}>
                {reasonsToHireMe.map(reason => <li key={reason} style={{
                    fontSize: "1.5rem",
                    listStyle: "circle"
                }}>{reason}</li>)}
            </ul>
        </TitledSection >
        <TitledSection title="Why not to hire me?" danger={true}>
            <ul style={{ padding: "0 1rem" }}>
                {reasonsNotToHireMe.map(reason => <li key={reason} style={{
                    fontSize: "1.5rem",
                    listStyle: "circle"
                }}>{reason}</li>)}
            </ul>
        </TitledSection >
    </MultipleTitledSectioned>
)

export default ReasonsToHireMeOrNotToHireMe
