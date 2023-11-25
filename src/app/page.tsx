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
  <div style={{
    display: "flex",
    flexWrap: "wrap",
    maxWidth: "1200px"
  }}>
    {info.skills.map(skill => <Skill key={skill} title={skill} />)}
  </div>
)

const LevelsToFontSizeMap = {
  1: "5rem",
  2: "4rem",
  3: "3rem",
  4: "2rem",
  5: "1rem",
}

const Important = ({ level, children }: {
  level: keyof typeof LevelsToFontSizeMap,
  children: string
}) => (
  <strong style={{ fontSize: LevelsToFontSizeMap[level], color: "cyan" }}>
    {children}
  </strong>
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
        marginBottom: "1rem"
      }}>
        <div style={{ fontSize: "2rem" }}>
          Hi, I am
          <Important level={1}>{info.fullName}</Important>,
          a {info.title}, with <Important level={3}>8</Important> years of total web development experience,
          <Important level={3}>6</Important> of them using <Important level={4}>MERN</Important> stack.
          I am a testing enthusiast, I thrive to have a 100% test coverage for all of my codes, whether they are a frontend projects,
          or a backend projects.
          <a download={true} href="/cv.pdf">Download my CV</a>
        </div>
        <Image width="500" height="500" src="/pic1.png" alt="Wael Hasan picture" />
      </div>
      <Skills />
    </main>
  )
}
