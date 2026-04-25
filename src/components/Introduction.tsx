import Image from "next/image"
import { MyAccountsLinks, IMyAccountsLinksProps } from "./MyAccountsLinks"
import { FaNode, FaReact } from "react-icons/fa"
import { IoLogoJavascript } from "react-icons/io5"
import { MdOutlineDoubleArrow } from "react-icons/md"
import { HiMiniArrowDownTray } from "react-icons/hi2";
import { Important } from "./Important"
import FlippingContents from "./FlippingContents"
import myPic from '../../public/pic1.png'

const Title = ({ title }: { title: string }) => (
    <span className="underline decoration-wavy decoration-[--foreground-decoration-rgb] decoration-[5px]">
        <Important level={3} color="var(--foreground-golden-rgb)">
            {title}
        </Important>
    </span>
)

const DownloadCVButton = () => (
    <a className={`
            inline-block
            transition ease-in-out delay-50 
            bg-lightSafeAlternate hover:bg-foregroundRgbImportant
            hover:text-black
            px-[2rem] py-[1rem]
            border-[1px] border-solid bordder-[--foreground-rgb-important]
            rounded-[50px]
        `}
        download={true}
        href="/cv.pdf">
        Download my CV
        <HiMiniArrowDownTray className="hidden lg:inline-block pl-[0.4rem]" />
    </a>
)

const ValidRolesFlippingContents = () => (
    <FlippingContents
        direction="bottom"
        intervalMS={2000}
        width="23rem"
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
                    <Icon className="inline-block ml-[1rem] text-[--foreground-rgb-important]" />
                </>
            ))
        }
    />
)

interface IntrodcutionProps {
    fullName: string
    nationality: string
    title: string
    totalExperience: string
    mernExperience: number
    accountsLinks: IMyAccountsLinksProps
}

const P = ({ children }: { children: React.ReactNode }) => (
    <p>
        <MdOutlineDoubleArrow className="
            inline-block 
            ml-[-2.5rem] mr-[0.5rem]
            text-[2rem] text-[--dark-brown] 
        "/>
        {children}
    </p>
)

const Introduction = ({ fullName, nationality, title, totalExperience, mernExperience, accountsLinks }: IntrodcutionProps) => (
    <div id="introduction" className="
        p-[3rem] pt-[1rem] 
        w-[90%] max-w-6xl
        flex flex-col gap-[1rem]
        text-[1.5rem] lg:text-[1.75rem] text-left
    ">
        <div>
            <p>
                Hi there,
            </p>
            <P>
                I am <Important level={3}>{fullName}</Important>,
                an experienced {nationality} <Title title={title} />, with <Important level={3}>{totalExperience}</Important> years of web development experience,
                <Important level={3}> {mernExperience}</Important> of them using <Important level={3}>MERN</Important> stack.
            </P>
            <div className={`
                relative block 
                md:float-right                
                mx-auto my-[1rem] 
                w-[25rem] h-[25rem] lg:w-[32rem] lg:h-[32rem] 
            `}>
                <Image fill src={myPic} alt="Wael Hasan picture" />
            </div>
            <P>
                Proficient in a wide range of technologies including
                {
                    [" JS", ", TS", ", Nodejs", ", Reactjs", ", Nextjs", ", Expressjs", ", FP", ", OOP"]
                        .map(skill => <Important key={skill} level={4}>{skill}</Important>)
                }.
            </P>
            <P>
                Known for 
                <Important level={4}> teamwork</Important>, 
                <Important level={4}> leadership</Important>, 
                <Important level={4}> problem-solving</Important>, 
                and a commitment to <Important level={4}>continuous learning</Important>, 
                with a strong focus on <Important level={4}>pragmatic solutions</Important> and <Important level={4}>collaboration</Important>.
            </P>
            <P>
                Strive to have a <Important level={3}>100%</Important> test coverage for frontend and backend projects.
            </P>
            <P>
                Currenlty searching for an opportunity as a <ValidRolesFlippingContents />
                (onsite or remote), so if you have an open role that suits me,
                it would be great to have a conversation about it.
                <br />
            </P>
        </div>
        <div className="
            flex gap-[1rem] 
            text-[1.5rem] lg:text-[2rem] text-left
        ">
            <DownloadCVButton />
            <MyAccountsLinks {...accountsLinks} />
        </div>
    </div>
)

export default Introduction
