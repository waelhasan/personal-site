
export const LevelsToFontSizeMap = {
    1: "5rem",
    2: "4rem",
    3: "3rem",
    4: "2rem",
    5: "1.5rem",
    6: "1rem"
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
