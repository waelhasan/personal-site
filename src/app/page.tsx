import Image from "next/image"

const info = {
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
    borderRadius: "10px"
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

export default function Home() {
  return (
    <main style={{
      height: "90vh",
      width: "100vw",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <div style={{
        display: "flex",
        maxWidth: "1200px",
        borderLeft: "1px solid white",
        padding: "1rem"
      }}>
        <div style={{ fontSize: "1.3rem" }}>
          <strong style={{ fontSize: "3rem", color: "cyan" }}>Wael Hasan</strong>
          <ul>
            <CustomizedListItem>
              Senior Full-Stack JS/TS web developer
            </CustomizedListItem>
            <CustomizedListItem>
              Experienced web developer, with 8 years of total web development experience, 6 of them using MERN stack.
            </CustomizedListItem>
            <CustomizedListItem>
              Testing enthusiast.
            </CustomizedListItem>
          </ul>
        </div>
        <Image width="500" height="500" src="/pic1.png" alt="Wael Hasan picture" />
      </div>
      <Skills />
    </main>
  )
}
