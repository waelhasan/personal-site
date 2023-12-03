import { FaGithub, FaLinkedin, FaBlogger, FaNpm } from "react-icons/fa"
import IconLink from "./IconLink"

export interface IMyAccountsLinksProps {
    linkedinUrl?: string
    githubUrl?: string
    npmUrl?: string
    bloggerUrl?: string
}

export const MyAccountsLinks = ({ linkedinUrl, githubUrl, npmUrl, bloggerUrl }: IMyAccountsLinksProps) => (
    <div className={`
            inline-flex
            gap-[0.5rem] sm:gap-[1rem]
            justify-center
            text-[2rem] sm:text-[4rem] text-[--foreground-rgb-important]
            align-middle
        `}
    // style={{
    //     display: "inline-flex",
    //     gap: "1rem",
    //     justifyContent: "center",
    //     fontSize: "4rem",
    //     color: "var(--foreground-rgb-important)",
    //     verticalAlign: "middle"
    // }}
    >
        <IconLink url={linkedinUrl} Icon={FaLinkedin} />
        <IconLink url={githubUrl} Icon={FaGithub} />
        <IconLink url={npmUrl} Icon={FaNpm} />
        <IconLink url={bloggerUrl} Icon={FaBlogger} />
    </div>
)
