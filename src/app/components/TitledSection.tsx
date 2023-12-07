import { Important } from "./Important"

const TitledSection = ({
    title,
    danger = false,
    children
}: {
    title: string,
    danger?: boolean,
    children: React.ReactNode
}) => {
    const titleColor = danger ? "rgb(177 49 112)" : "var(--foreground-section-title-rgb)"
    return (
        <figure className="
                relative
                rounded-[30px]
                p-[2rem] m-[2rem]
                min-w-[50%] w-[100%]
            "
            style={{
                background: `var(${danger ? '--light-danger-alternate-bg' : '--light-safe-alternate-bg'})`
            }}>
            <div className="mt-[5rem] max-w-4xl">
                <figcaption className="
                        absolute left-[50%] top-[1rem]
                        w-max
                        rounded-[50%]
                        py-[1.2rem] px-[2rem]
                        translate-x-[-50%]
                        border-b-[1px] border-b-solid
                    "
                    style={{
                        borderBottomColor: titleColor
                    }}>
                    <Important level={4} color={titleColor}>{title}</Important>
                </figcaption>
                {children}
            </div>
        </figure>
    )
}

export default TitledSection
