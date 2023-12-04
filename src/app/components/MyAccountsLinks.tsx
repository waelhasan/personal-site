import { FaGithub, FaLinkedin, FaBlogger, FaNpm } from "react-icons/fa"
import IconLink from "./IconLink"

export interface IMyAccountsLinksProps {
    linkedinUrl?: string
    githubUrl?: string
    npmUrl?: string
    bloggerUrl?: string
}

export const MyAccountsLinks = ({
    linkedinUrl,
    githubUrl,
    npmUrl,
    bloggerUrl
}: IMyAccountsLinksProps) => (
    <div className="
        inline-flex justify-center items-center
        gap-[0.5rem] sm:gap-[1rem]
        text-[2rem] sm:text-[3rem] text-[--foreground-rgb-important]
    ">
        <IconLink url={linkedinUrl} Icon={FaLinkedin} />
        <IconLink url={githubUrl} Icon={FaGithub} />
        <IconLink url={npmUrl} Icon={FaNpm} />
        <IconLink url={bloggerUrl} Icon={FaBlogger} />
    </div>
)
