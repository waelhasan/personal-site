
export const LevelsToFontSizeMap = {
    1: "3rem",
    2: "2.5rem",
    3: "2rem",
    4: "1.5rem",
    5: "1rem",
    6: "0.5rem"
}

export const Important = ({ level, color = "var(--foreground-rgb-important)", children }: {
    level: keyof typeof LevelsToFontSizeMap,
    children: string,
    color?: string
}) => (
    <strong style={{ fontSize: LevelsToFontSizeMap[level], color: color }}>
        {children}
    </strong>
)
