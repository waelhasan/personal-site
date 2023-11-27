"use client"

import { useEffect, useState } from "react"

interface IFlippingContentProps {
    contents: React.ReactNode[]
}

const FlippingContents = ({ contents }: IFlippingContentProps) => {
    const [currentContentIndex, setCurrentContentIndex] = useState(0)

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentContentIndex(currentIndex => (currentIndex + 1) % contents.length)
        }, 2000)

        return () => clearInterval(intervalId)
    }, [])

    return (
        <div style={{ height: "fit-content", transition: "all 0.5s" }}>
            {contents[currentContentIndex]}
        </div>
    )
}

export default FlippingContents
