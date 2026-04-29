import { HiMiniArrowDownTray } from "react-icons/hi2"

const DownloadButton = ({
    title,
    fileName,
    size
}: {
    title: string,
    fileName: string,
    size: 'small' | 'big'
}) => (
    <a className={`
            inline-block
            transition ease-in-out delay-50 
            bg-lightSafeAlternate hover:bg-foregroundRgbImportant
            hover:text-black
            px-[${size === 'big' ? 2 : 1}rem] py-[${size === 'big' ? 1 : 0.5}rem]
            rounded-[50px]
            mt-[0.5rem]
        `}
        download={true}
        href={fileName}>
        {title}
        <HiMiniArrowDownTray className="hidden lg:inline-block pl-[0.4rem]" size={32} />
    </a>
)

export default DownloadButton
