const LeftArticle = ({ children }: { children: React.ReactNode }) => (
    <>
        {/* The line that fills the gap between individual boxes and the timeline */}
        <span className={`
            w-[1rem] 
            border-[1px] border-solid border-[--foreground-section-title-rgb] 
            translate-x-[1rem] translate-y-[1.11rem]
        `} />
        {/* The box that shows element details */}
        <article className={`
            xl:w-fit w-[95%] max-w-fit
            text-[1.4rem]
            my-[1rem] mx-0
            py-[1rem] pl-[2rem]
            p-[1rem]
            border-[1px] border-solid border-[--foreground-section-title-rgb] rounded-b-[40px]
            bg-[--light-safe-alternate-bg]
            xl:text-right
            rounded-tl-[40px]
        `}>
            {children}
        </article>
    </>
)

export default LeftArticle
