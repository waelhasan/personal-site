import { FaGithub, FaLinkedin, FaBlogger, FaNpm } from "react-icons/fa"

const MyAccountsLinks = () => (
    <div style={{
        display: "flex",
        gap: "1rem",
        width: "100%",
        justifyContent: "center",
        fontSize: "4rem"
    }}>
        <a target="_blank" href="https://linkedin.com/in/whsn">
            <FaLinkedin />
        </a>
        <a target="_blank" href="https://github.com/waelhasan">
            <FaGithub />
        </a>
        <a target="_blank" href="https://www.npmjs.com/~whasan/">
            <FaNpm />
        </a>
        <a target="_blank" href="https://waelhasan87.blogspot.com/">
            <FaBlogger />
        </a>
    </div>
)

export default MyAccountsLinks
