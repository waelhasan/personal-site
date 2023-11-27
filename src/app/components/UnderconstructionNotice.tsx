const UnderconstructionNotice = () => (
    <h1 style={{
        position: "absolute",
        fontSize: "2rem",
        textAlign: "center",
        color: "yellow",
        border: "5px dashed yellow",
        backgroundColor: "var(--red-color)",
        padding: "1rem",
        alignSelf: "flex-start",
        transform: "translate(-15%, 15%) rotateZ(-45deg)"
    }}>
        <span style={{ fontSize: "3rem" }}>
            ⚠️
        </span>
        <br />
        Under construction
    </h1>
)

export default UnderconstructionNotice
