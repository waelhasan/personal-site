"use client"

import { useEffect, useState } from "react"

interface IFlippingContentProps {
    contents: React.ReactNode[]
    direction?: "top" | "bottom" | "right" | "left"
    durationMS?: number
    intervalMS?: number
    width?: string
    justifyContent?: "left" | "right" | "center"
}

const FlippingContents = ({
    contents,
    direction = "top",
    durationMS = 250,
    intervalMS = 1500,
    width = "10rem",
    justifyContent = "center"
}: IFlippingContentProps) => {
    const [currentContentIndex, setCurrentContentIndex] = useState(0)

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentContentIndex(currentIndex => (currentIndex + 1) % (contents.length))
        }, intervalMS)

        return () => clearInterval(intervalId)
    }, [contents])

    return (
        <div className={`
            h-[3rem]
            overflow-hidden
            relative inline-flex
            align-bottom
        `}
            style={{
                width,
                justifyContent
            }}>
            {contents.map((content, index) => (
                <div
                    key={index}
                    style={{
                        display: "inline-block",
                        position: "absolute",
                        visibility: index === currentContentIndex ? "visible" : "hidden",
                        [direction]: index === currentContentIndex ?
                            "0" :
                            index === currentContentIndex - 1 ||
                                index === contents.length - 1 && currentContentIndex === 0 ?
                                "-200%" : "200%",
                        transition: `all ${durationMS / 1000}s`
                    }}>
                    {content}
                </div>
            ))}
        </div>
    )
}

export default FlippingContents
