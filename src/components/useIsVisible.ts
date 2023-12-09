import { useEffect, useState } from "react";

function useIsVisible(ref: any) {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const io = new IntersectionObserver(
            entries => setIsVisible(entries[0].isIntersecting)
        )
        const currentElement = ref?.current;
        currentElement && io.observe(currentElement)

        return () => io.unobserve(currentElement)
    }, [])

    return isVisible
}

export default useIsVisible
