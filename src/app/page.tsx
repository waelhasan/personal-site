import Image from "next/image"

const info = {
  fullName: "Wael Hasan",
  nationality: "Egypian",
  title: "Senior Full-Stack JS/TS web developer",
  technicalSkills: ['HTML5', 'CSS3', 'Javascript', 'Typescript', 'Nodejs', 'Expressjs', 'RESTful API design', 'Graphql', 'Reactjs', 'Redux', 'Nextjs', 'Jest', 'Cypress', 'Storybook', 'SQL', 'Sequelize ORM', 'Mongodb', 'Mongoose ODM', 'Contentful', 'Git', 'Github', 'Linux', 'Bash', 'Design patterns', 'Gulp', 'Socket.io', 'Deepstream', 'Redis', 'Docker', 'AWS', 'TypeORM', 'JSON', 'JSON schema', 'Mocha', 'Chai', 'Enzyme', 'SASS', 'Yeoman'],
  softSkills: ['Teamwork', 'Leadership', 'Humility', 'Problem-Solving', 'Self-starter', 'Pragmatic', 'Communication', 'Collaboration', 'Mentorship', 'Lifelong learner'],
  reasonsToHireMe: [
    "Passion for being a better software engineer",
    "Passion for learning more about technology in general and JS in particular",
    "Fast learner",
    "Passion for building well engineered useful stuff and see people use it happily",
    "Good team player",
    "A lazy developer that searches for the simplest best way to make the code as reliable, self-documenting, and maintainable as possible; so it takes less effort for any change from me or my colleagues"
  ],
  reasonsNotToHireMe: [
    "To do repetitive work, that does not leverage my technical skills",
    "If you work on an industry that contradicts with my faith and believs, or I prefer to stay away from, which are: porn, weaponary, racism, and insurance."
  ]
}

const CustomizedListItem = ({ children }: { children: string }) => (
  <li style={{ listStyleType: "disc" }}>{children}</li>
)

const Skill = ({ title }: { title: string }) => (
  <span style={{
    display: "inline-block",
    fontSize: "1rem",
    fontStyle: "italic",
    border: "1px solid var(--foreground-rgb-important)",
    padding: "1rem",
    margin: "10px 10px",
    borderRadius: "10px",
    cursor: "pointer"
  }}>
    {title}
  </span>
)

const TitledSection = ({
  title,
  titleColor = "var(--foreground-section-title-rgb)",
  children
}: {
  title: string,
  titleColor?: string,
  children: React.ReactNode
}) => (
  <figure style={{
    position: "relative",
    border: `1px solid ${titleColor}`,
    borderRadius: "30px",
    padding: "2rem",
    margin: "2rem"
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
        borderBottom: `1px solid ${titleColor}`,
        borderRadius: "50%",
        padding: "1.2rem 2rem"
      }}>
        <Important level={4} color={titleColor}>{title}</Important>
      </figcaption>
      {children}
    </div>
  </figure>
)

const Skills = () => (
  <div style={{
    display: "flex"
  }}>
    <div style={{ flex: 1 }}>
      <TitledSection title="Technical skills">
        {info.technicalSkills.map(skill => <Skill key={skill} title={skill} />)}
      </TitledSection >
    </div>
    <div style={{ flex: 1 }}>
      <TitledSection title="Soft skills">
        {info.softSkills.map(skill => <Skill key={skill} title={skill} />)}
      </TitledSection >
    </div>
  </div>
)

const LevelsToFontSizeMap = {
  1: "5rem",
  2: "4rem",
  3: "3rem",
  4: "2rem",
  5: "1rem",
}

const Important = ({ level, color = "var(--foreground-rgb-important)", children }: {
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
      border: "1px solid var(--foreground-rgb-important)",
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
    textDecorationColor: "var(--foreground-decoration-rgb)",
    textDecorationThickness: "5px"
  }}>
    <Important level={3} color="var(--foreground-golden-rgb)">
      {title}
    </Important>
  </span>
)

const Intorduction = () => (
  <div style={{
    display: "flex",
    maxWidth: "1200px",
    padding: "2rem",
    marginBottom: "1rem",
    alignItems: "center"
  }}>
    <div style={{ fontSize: "2rem" }}>
      Hi there, <br />I am
      <Important level={1}>{info.fullName}</Important>,
      an {info.nationality} <Title title={info.title} />, with <Important level={3}>8</Important> years of total web development experience,
      <Important level={3}>6</Important> of them using <Important level={3}>MERN</Important> stack.
      I am a testing enthusiast, I thrive to have a <Important level={3}>100%</Important> test coverage for all of my codes, whether they are a frontend projects,
      or a backend projects.

      <DownloadCVButton />
    </div>
    <Image width="500" height="500" src="/pic1.png" alt="Wael Hasan picture" />
  </div>
)

const ReasonsToHireMeOrNotToHireMe = () => (
  <div style={{
    display: "flex"
  }}>
    <div style={{ flex: 1 }}>
      <TitledSection title="Why would you hire me?">
        <ul style={{ padding: "0 1rem" }}>
          {info.reasonsToHireMe.map(reason => <li key={reason} style={{
            fontSize: "1.5rem",
            listStyle: "circle"
          }}>{reason}</li>)}
        </ul>
      </TitledSection >
    </div>
    <div style={{ flex: 1 }}>
      <TitledSection title="Why not to hire me?" titleColor="rgb(177 49 112)">
        <ul style={{ padding: "0 1rem" }}>
          {info.reasonsNotToHireMe.map(reason => <li key={reason} style={{
            fontSize: "1.5rem",
            listStyle: "circle"
          }}>{reason}</li>)}
        </ul>
      </TitledSection >
    </div>
  </div>
)

export default function Home() {
  return (
    <main style={{
      width: "100vw",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <Intorduction />
      <ReasonsToHireMeOrNotToHireMe />
      <Skills />
    </main>
  )
}
