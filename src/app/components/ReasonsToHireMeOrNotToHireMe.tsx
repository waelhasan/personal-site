import TitledSection from "./TitledSection";

interface ReasonsToHireMeOrNotToHireMeProps {
    reasonsToHireMe: string[]
    reasonsNotToHireMe: string[]
}

const ReasonsToHireMeOrNotToHireMe = ({ reasonsNotToHireMe, reasonsToHireMe }: ReasonsToHireMeOrNotToHireMeProps) => (
    <div style={{
        display: "flex"
    }}>
        <div style={{ flex: 1 }}>
            <TitledSection title="Why to you hire me?">
                <ul style={{ padding: "0 1rem" }}>
                    {reasonsToHireMe.map(reason => <li key={reason} style={{
                        fontSize: "1.5rem",
                        listStyle: "circle"
                    }}>{reason}</li>)}
                </ul>
            </TitledSection >
        </div>
        <div style={{ flex: 1 }}>
            <TitledSection title="Why not to hire me?" danger={true}>
                <ul style={{ padding: "0 1rem" }}>
                    {reasonsNotToHireMe.map(reason => <li key={reason} style={{
                        fontSize: "1.5rem",
                        listStyle: "circle"
                    }}>{reason}</li>)}
                </ul>
            </TitledSection >
        </div>
    </div>
)

export default ReasonsToHireMeOrNotToHireMe
