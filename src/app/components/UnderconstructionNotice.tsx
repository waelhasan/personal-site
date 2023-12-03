const UnderconstructionNotice = () => (
    <div className={`
        flex justify-center
        w-[40rem]
        absolute top-[4rem] left-0 
        z-[100]
        text-[1.5rem] text-center text-[yellow]
        border-[5px] border-dashed border-[yellow]
        bg-[--red-color]
        origin-center rotate-[-45deg] translate-x-[-40%] translate-y-[-48%]
    `}>
        <h1 className={`md:p-[1rem]`}>
            <span className="text-[2rem] lg:text-[3rem]">
                ⚠️
            </span>
            <br />
            Under construction
        </h1>
    </div>
)

export default UnderconstructionNotice
