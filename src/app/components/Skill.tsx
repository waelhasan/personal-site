"use client"

import { useEffect, useRef, useState } from "react"
import useIsVisible from "./useIsVisible"

export interface ISkill {
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

export const Skill = ({ title, years, level }: ISkill) => {
    const [currentLevel, setCurrentLevel] = useState(0)
    const ref = useRef(null)
    const isVisible = useIsVisible(ref)

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
        isVisible ?
            incrementCurrentLevel() :
            setCurrentLevel(0)
    }, [currentLevel, isVisible])

    return (
        <span ref={ref} className={`
            inline-block
            transition ease-in-out delay-50 
            bg-lightSafeAlternate hover:bg-foregroundRgbImportant
            text-[1.5rem] sm:text-[1rem] hover:text-black
            border-[1px] border-solid border-[--foreground-rgb-important]
            p-[0.7rem] m-[0.2rem]
            rounded-[20px]
            cursor-pointer
            w-full sm:w-fit
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
                            className="text-[3rem] sm:text-[2rem]"
                            min={0}
                            max={100}
                            low={30}
                            high={60}
                            optimum={100}
                            value={currentLevel}
                        />
                    </FlexLi>
                </ul>
            )}
        </span>
    )
}

