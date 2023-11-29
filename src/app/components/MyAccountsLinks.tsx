import { FaGithub, FaLinkedin, FaBlogger, FaNpm } from "react-icons/fa"

export interface IMyAccountsLinksProps {
    linkedinUrl?: string
    githubUrl?: string
    npmUrl?: string
    bloggerUrl?: string
}

export const MyAccountsLinks = ({ linkedinUrl, githubUrl, npmUrl, bloggerUrl }: IMyAccountsLinksProps) => (
    <div style={{
        display: "inline-flex",
        gap: "1rem",
        width: "100%",
        justifyContent: "center",
        fontSize: "4rem",
        color: "var(--foreground-rgb-important)"
    }}>
        {!!linkedinUrl && <a target="_blank" href={linkedinUrl}>
            <FaLinkedin />
        </a>}
        {!!githubUrl && <a target="_blank" href="https://github.com/waelhasan">
            <FaGithub />
        </a>}
        {!!npmUrl && <a target="_blank" href="https://www.npmjs.com/~whasan/">
            <FaNpm />
        </a>}
        {!!bloggerUrl && <a target="_blank" href="https://waelhasan87.blogspot.com/">
            <FaBlogger />
        </a>}
    </div>
)
