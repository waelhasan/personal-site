const RightArticle = ({ children }: { children: React.ReactNode }) => (
    <>
        {/* The line that fills the gap between individual boxes and the timeline */}
        <span className={`
            w-[1rem] 
            border-[1px] border-solid border-[--foreground-section-title-rgb] 
            translate-y-[1.11rem] translate-x-[1rem] xl:translate-x-[2rem]
        `} />
        {/* The box that shows element details */}
        <article className={`
            xl:w-fit w-[95%] max-w-fit
            text-[1.4rem]
            my-[1rem] mx-0
            py-[1rem] pl-[2rem] xl:px-[1rem]
            border-[1px] border-solid border-[--foreground-section-title-rgb] rounded-b-[40px]
            bg-[--light-safe-alternate-bg]
            rounded-tl-[40px] xl:rounded-tl-none xl:rounded-tr-[40px]
            xl:translate-x-[calc(100%+2rem)]
        `}>
            {children}
        </article>
    </>
)

export default RightArticle
