import { IoNavigate } from "react-icons/io5"

const MoreDetailsLink = ({ href }: { href: string }) => (
    <a className={`
            inline-block
            transition ease-in-out delay-50 underline
            text-[--foreground-decoration-rgb] hover:text-[--foreground-rgb] text-[1.3rem]
            px-[1rem] py-[0.5rem]
            rounded-[50px]
            mt-[1rem]
        `}
        target="_blank"
        href={href}>
        See more details
        <IoNavigate className="inline-block pl-[0.4rem]" />
    </a>
)

export default MoreDetailsLink
