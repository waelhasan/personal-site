import Image from "next/image"

const info = {
  fullName: "Wael Hasan",
  title: "Senior Full-Stack JS/TS web developer",
  skills: ['HTML5', 'CSS3', 'Javascript', 'Typescript', 'Nodejs', 'Expressjs', 'RESTful API design', 'Graphql', 'Reactjs', 'Redux', 'Nextjs', 'Jest', 'Cypress', 'Storybook', 'SQL', 'Sequelize ORM', 'Mongodb', 'Mongoose ODM', 'Contentful', 'Git', 'Github', 'Linux', 'Bash', 'Design patterns', 'Gulp', 'Socket.io', 'Deepstream', 'Redis', 'Docker', 'AWS', 'TypeORM', 'JSON', 'JSON schema', 'Mocha', 'Chai', 'Enzyme', 'SASS', 'Yeoman', 'Teamwork', 'Leadership', 'Humility', 'Problem-Solving', 'Self-starter', 'Pragmatic', 'Communication', 'Collaboration', 'Mentorship', 'Lifelong learner']
}

const CustomizedListItem = ({ children }: { children: string }) => (
  <li style={{ listStyleType: "disc" }}>{children}</li>
)

const Skill = ({ title }: { title: string }) => (
  <span style={{
    display: "inline-block",
    fontSize: "1rem",
    fontStyle: "italic",
    border: "1px solid cyan",
    padding: "1rem",
    margin: "10px 10px",
    borderRadius: "10px",
    cursor: "pointer"
  }}>
    {title}
  </span>
)

const Skills = () => (
  <figure style={{
    position: "relative",
    border: "1px solid cyan",
    borderRadius: "30px",
    padding: "2rem",
    margin: "0 2rem"
  }}>
    <div style={{
      marginTop: "5rem",
      display: "flex",
      flexWrap: "wrap",
      maxWidth: "1200px"
    }}>
      <figcaption style={{
        position: "absolute",
        left: "50%",
        top: "1rem",
        transform: "translateX(-50%)",
      }}>
        <Important level={2} color="aquamarine">Skills</Important>
      </figcaption>
      {info.skills.map(skill => <Skill key={skill} title={skill} />)}
    </div>
  </figure>
)

const LevelsToFontSizeMap = {
  1: "5rem",
  2: "4rem",
  3: "3rem",
  4: "2rem",
  5: "1rem",
}

const Important = ({ level, color = "cyan", children }: {
  level: keyof typeof LevelsToFontSizeMap,
  children: string,
  color?: string
}) => (
  <strong style={{ fontSize: LevelsToFontSizeMap[level], color: color }}>
    {children}
  </strong>
)

const DownloadCVButton = () => (
  <a
    download={true}
    href="/cv.pdf"
    style={{
      display: "block",
      padding: "1rem 2rem",
      border: "1px solid cyan",
      borderRadius: "50px",
      width: "fit-content",
      margin: "2rem 0"
    }}>
    Download my CV
  </a>
)

const Title = ({ title }: { title: string }) => (
  <span style={{
    textDecorationLine: "underline",
    textDecorationStyle: "wavy",
    textDecorationColor: "mediumaquamarine",
    textDecorationThickness: "5px"
  }}>{title}</span>
)

export default function Home() {
  return (
    <main style={{
      height: "100vh",
      width: "100vw",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <div style={{
        display: "flex",
        maxWidth: "1200px",
        padding: "2rem",
        marginBottom: "1rem",
        alignItems: "center"
      }}>
        <div style={{ fontSize: "2rem" }}>
          Hi there, <br/>I am
          <Important level={1}>{info.fullName}</Important>,
          a <Title title={info.title} />, with <Important level={3}>8</Important> years of total web development experience,
          <Important level={3}>6</Important> of them using <Important level={3}>MERN</Important> stack.
          I am a testing enthusiast, I thrive to have a <Important level={3}>100%</Important> test coverage for all of my codes, whether they are a frontend projects,
          or a backend projects.

          <DownloadCVButton />
        </div>
        <Image width="500" height="500" src="/pic1.png" alt="Wael Hasan picture" />
      </div>
      <Skills />
    </main>
  )
}
