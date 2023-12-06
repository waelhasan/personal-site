"use client"

import { ReactNode, useRef } from "react"
import { FaGithub, FaLinkedin, FaBlogger, FaNpm } from "react-icons/fa"
import IconLink from "./IconLink"
import useIsVisible from "./useIsVisible"

export interface IMyAccountsLinksProps {
    linkedinUrl?: string
    githubUrl?: string
    npmUrl?: string
    bloggerUrl?: string
}

const HorizontalLinks = ({ children }: { children: ReactNode }) => (
    <div className="
        inline-flex
        gap-[0.5rem] sm:gap-[1rem]
        
    ">
        {children}
    </div>
)

const VerticalLinks = ({ children }: { children: ReactNode }) => (
    <div className="
        inline-flex flex-col
        fixed top-[50%] left-0
        translate-y-[-50%]
        z-1000
        gap-[0.5rem] sm:gap-[1rem]
        bg-[--darker-bg-rgb]
        p-[1rem]
    ">
        {children}
    </div>
)

export const MyAccountsLinks = ({
    linkedinUrl,
    githubUrl,
    npmUrl,
    bloggerUrl
}: IMyAccountsLinksProps) => {
    const parentRef = useRef(null)
    const isParentVisible = useIsVisible(parentRef)
    const LinksContainer = isParentVisible ? HorizontalLinks : VerticalLinks

    return (
        <div ref={parentRef}
            className="
            inline-flex items-center
            text-[2rem] sm:text-[3rem] text-[--foreground-rgb-important]
        ">
            <LinksContainer>
                <IconLink url={linkedinUrl} Icon={FaLinkedin} />
                <IconLink url={githubUrl} Icon={FaGithub} />
                <IconLink url={npmUrl} Icon={FaNpm} />
                <IconLink url={bloggerUrl} Icon={FaBlogger} />
            </LinksContainer>
        </div>
    )
}
