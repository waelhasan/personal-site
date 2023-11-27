import Image from "next/image"
import { Important } from "./Important";

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
            display: "block",
            padding: "1rem 2rem",
            border: "1px solid var(--foreground-rgb-important)",
            borderRadius: "50px",
            width: "fit-content",
            margin: "2rem 0"
        }}>
        Download my CV
    </a>
)

interface IntrodcutionProps {
    fullName: string
    nationality: string
    title: string
}

const Introduction = ({ fullName, nationality, title }: IntrodcutionProps) => (
    <div style={{
        display: "flex",
        maxWidth: "1200px",
        padding: "2rem",
        marginBottom: "1rem",
        alignItems: "center"
    }}>
        <div
            id="introduction"
            style={{ fontSize: "2rem" }}>
            Hi there, <br />I am
            <Important level={1}>{fullName}</Important>,
            an {nationality} <Title title={title} />, with <Important level={3}>8</Important> years of total web development experience,
            <Important level={3}>6</Important> of them using <Important level={3}>MERN</Important> stack.
            I am a testing enthusiast, I thrive to have a <Important level={3}>100%</Important> test coverage for all of my codes, whether they are frontend projects,
            or backend projects.
            <DownloadCVButton />
        </div>
        <Image width="500" height="500" src="/pic1.png" alt="Wael Hasan picture" />
    </div>
)

export default Introduction
