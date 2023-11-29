import Image from "next/image"
import { Important } from "./Important"
import FlippingContents from "./FlippingContents"
import { MyAccountsLinks, IMyAccountsLinksProps } from "./MyAccountsLinks"
import { FaNode, FaReact } from "react-icons/fa"
import { IoLogoJavascript } from "react-icons/io5"

const Title = ({ title }: { title: string }) => (
    <span style={{
        textDecorationLine: "underline",
        textDecorationStyle: "wavy",
        textDecorationColor: "var(--foreground-decoration-rgb)",
        textDecorationThickness: "5px"
    }}>
        <Important level={3} color="var(--foreground-golden-rgb)">
            {title}
        </Important>
    </span>
)

const DownloadCVButton = () => (
    <a
        download={true}
        href="/cv.pdf"
        style={{
            display: "inline-block",
            padding: "1rem 2rem",
            border: "1px solid var(--foreground-rgb-important)",
            borderRadius: "50px",
            width: "fit-content",
            margin: "2rem 1rem 0 0",
            backgroundColor: "var(--light-safe-alternate-bg)"
        }}>
        Download my CV
    </a>
)

const ValidRolesFlippingContents = () => (
    <FlippingContents
        direction="bottom"
        width="30rem"
        contents={
            [
                { title: "Backend Nodejs developer", Icon: FaNode },
                { title: "Frontend Reactjs developer", Icon: FaReact },
                { title: "Full-Stack MERN developer", Icon: IoLogoJavascript }
            ].map(({ title, Icon }) => (
                <>
                    <Important key={title} color="var(--foreground-golden-rgb)" level={4}>
                        {title}
                    </Important>
                    <Icon style={{
                        display: "inline-block",
                        marginLeft: "1rem",
                        color: "var(--foreground-rgb-important)"
                    }} />
                </>
            ))
        }
    />
)

interface IntrodcutionProps {
    fullName: string
    nationality: string
    title: string
    accountsLinks: IMyAccountsLinksProps
}

const P = ({ children }: { children: React.ReactNode }) => (
    <p className="arrow-before">
        {children}
    </p>
)

const Introduction = ({ fullName, nationality, title, accountsLinks }: IntrodcutionProps) => (
    <div style={{
        maxWidth: "1200px",
        padding: "2rem",
        marginBottom: "1rem",
    }}>
        <div id="introduction"
            style={{
                fontSize: "2rem",
                textAlign: "left",
                borderRadius: "50%"
            }}>
            <p>
                Hi there,
            </p>
            <P>
                I am <Important level={2}>{fullName}</Important>,
                an {nationality} <Title title={title} />, with <Important level={3}>8</Important> years of total web development experience,
                <Important level={3}>6</Important> of them using <Important level={3}>MERN</Important> stack.
            </P>
            <Image width="500" height="529" src="/pic1.png" alt="Wael Hasan picture" style={{ float: "right" }} />
            <P>
                I build a high quality Functional and Object Oriented code, plus being a testing enthusiast, which makes me
                thrive to have a <Important level={3}>100%</Important> test coverage for all of my codes,
                whether they are frontend projects,
                or backend projects.
            </P>
            <P>
                I am searching for an opportunity for a
                <ValidRolesFlippingContents />, so if you have an open role that suits me, it would be great to have a conversation about it, and have the ability to apply for it.
                <DownloadCVButton />
                <MyAccountsLinks {...accountsLinks} />
            </P>
        </div>
    </div>
)

export default Introduction
