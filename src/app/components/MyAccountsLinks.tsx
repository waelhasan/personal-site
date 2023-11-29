import { FaGithub, FaLinkedin, FaBlogger, FaNpm } from "react-icons/fa"

export interface IMyAccountsLinksProps {
    linkedinUrl?: string
    githubUrl?: string
    npmUrl?: string
    bloggerUrl?: string
}

const CustomizedLink = ({ url, Icon }: { url?: string, Icon: React.JSXElementConstructor<{}> }) => (
    !!url &&
    <a className={`
            text-foregroundSectionTitle hover:text-foregroundRgb
        `}
        target="_blank"
        href={url}>
        <Icon />
    </a>
)

export const MyAccountsLinks = ({ linkedinUrl, githubUrl, npmUrl, bloggerUrl }: IMyAccountsLinksProps) => (
    <div style={{
        display: "inline-flex",
        gap: "1rem",
        justifyContent: "center",
        fontSize: "4rem",
        color: "var(--foreground-rgb-important)",
        verticalAlign: "middle"
    }}>
        <CustomizedLink url={linkedinUrl} Icon={FaLinkedin} />
        <CustomizedLink url={githubUrl} Icon={FaGithub} />
        <CustomizedLink url={npmUrl} Icon={FaNpm} />
        <CustomizedLink url={bloggerUrl} Icon={FaBlogger} />
    </div>
)
