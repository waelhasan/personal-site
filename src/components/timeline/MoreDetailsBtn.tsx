import { IoNavigate } from "react-icons/io5"

const MoreDetailsBtn = ({ href }: { href: string }) => (
    <a className={`
            inline-block
            transition ease-in-out delay-50 
            bg-[--darker-bg-rgb] hover:bg-foregroundRgbImportant
            hover:text-black text-[1.3rem]
            px-[1rem] py-[0.5rem]
            border-[1px] border-solid bordder-[--foreground-rgb-important]
            rounded-[50px]
            mt-[1rem]
        `}
        target="_blank"
        href={href}>
        More details
        <IoNavigate className="hidden lg:inline-block pl-[0.4rem]" />
    </a>
)

export default MoreDetailsBtn
