"use client"

import { useEffect, useState } from "react"

interface Skill {
    title: string
    years?: number
    level?: number
}

const FlexLi: React.FunctionComponent<{ children: any }> = ({ children }) => (
    <li className="w-full">
        <span className="w-[calc(100%-10px)] gap-[10px] inline-flex items-center justify-between">
            {children}
        </span>
    </li>
)

const Skill = ({ title, years, level }: Skill) => {
    const [currentLevel, setCurrentLevel] = useState(0)

    const incrementCurrentLevel = () => {
        const levelOrZero = level || 0
        setTimeout(() => {
            setCurrentLevel(currentLevel =>
             currentLevel < levelOrZero ?
                    currentLevel + 3 :
                    levelOrZero)
        }, 20)
    }

    useEffect(() => {
        incrementCurrentLevel()
    }, [currentLevel])

    return (
        <span className={`
            inline-block
            transition ease-in-out delay-50 
            bg-lightSafeAlternate hover:bg-foregroundRgbImportant
            text-[1rem] hover:text-black
            border-[1px] border-solid border-[--foreground-rgb-important]
            p-[0.7rem] m-[0.2rem]
            rounded-[20px]
            cursor-pointer
        `}>
            <div className="text-center" style={{
                textDecorationLine: level ? "underline" : "none"
            }}>
                {title}
            </div>
            {level && (
                <ul>
                    <FlexLi>
                        <span>Years:</span>
                        <span>{years}</span>
                    </FlexLi>
                    <FlexLi>
                        Level
                        <meter
                            className="text-[2rem]"
                            min={0}
                            max={100}
                            low={30}
                            high={50}
                            optimum={100}
                            value={currentLevel}
                        />
                    </FlexLi>
                </ul>
            )}
        </span>
    )
}

export default Skill

