const UnderconstructionNotice = () => (
    <h1 className={`
        absolute
        w-full
        text-[2rem] text-center text-[yellow]
        border-[5px] border-dashed border-[yellow]
        bg-[--red-color]
        p-[1rem]
        self-start
        translate-x-[-45%] translate-y-[50%] rotate-[-45deg]
    `}>
        <span style={{ fontSize: "3rem" }}>
            ⚠️
        </span>
        <br />
        Under construction
    </h1>
)

export default UnderconstructionNotice
