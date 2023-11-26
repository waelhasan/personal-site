import Image from "next/image"
import info from "./info"

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
      maxWidth: "900px"
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
  5: "1.5rem",
  6: "1rem"
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

const Experiences = () => (
  <section style={{
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
    fontSize: "2rem",
    margin: "2rem 0",
    transform: "translateX(-50%)"
  }}>
    <h1 style={{
      position: "absolute",
      left: "100%",
      top: "0",
      transform: "translateX(-50%)",
      borderBottom: "1px solid var(--foreground-section-title-rgb)",
      borderRadius: "50%"
    }}>
      <Important level={4} color="var(--foreground-section-title-rgb)">Employment history</Important>
    </h1>
    <div style={{
      display: "flex",
      flexDirection: "row",
      marginTop: "7rem"
    }}>
      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        borderRight: "1px solid var(--foreground-section-title-rgb)",
        padding: "1rem",
        justifyContent: "flex-start",
        flex: "1"
      }}>
        {info.experience.map((experience, index) => {
          const formatter = new Intl.DateTimeFormat('en', { month: 'short', year: "numeric" });
          const isOdd = index % 2 === 0
          const fromDate = formatter.format(new Date(experience.from))
          const toDate = formatter.format(new Date(experience.to))

          const fromTo = `${fromDate} - ${toDate}`
          return (
            <>
              {/* The circle in timeline */}
              <span style={{
                width: "1rem",
                height: "1rem",
                backgroundColor: "var(--foreground-section-title-rgb)",
                border: "1px solid var(--foreground-section-title-rgb)",
                borderRadius: "50%",
                transform: `translate(1.5rem, 1.5rem)`
              }} />
              {/* The line that fills the gap between the role box and the timeline */}
              <span style={{
                width: "1rem",
                borderTop: "1px solid var(--foreground-section-title-rgb)",
                transform: `translate(${isOdd ? 2 : 1}rem, 1.06rem)`
              }} />
              {/* The box that shows role details */}
              <article
                key={fromTo}
                style={{
                  textAlign: isOdd ? "left" : "right",
                  width: "36rem",
                  fontSize: "1.4rem",
                  margin: "1rem 0",
                  padding: "1rem",
                  border: "1px solid var(--foreground-section-title-rgb)",
                  borderBottomRightRadius: "40px",
                  [isOdd ? "borderTopRightRadius" : "borderTopLeftRadius"]: "40px",
                  borderBottomLeftRadius: "40px",
                  ...(isOdd ? { transform: "translateX(calc(100% + 2rem))" } : {})
                }}>
                <div style={{ fontFamily: "monospace" }}>
                  {fromTo}
                </div>
                <Important level={5} color="var(--darker-foreground-golden-rgb)">
                  {experience.title}
                </Important>
                <br />
                <Important level={6}>
                  {experience.company.name + ` (${experience.type[0] + experience.type.slice(1).toLocaleLowerCase()})`}
                </Important>,
                <details>
                  <summary style={{ transition: "all 0.5s" }}>
                    Read more
                  </summary>
                  <h2 style={{ textAlign: "justify" }}>{experience.summary}</h2>
                  {experience.skills.map(skill => <Skill key={skill} title={skill} />)}
                </details>
              </article>
            </>
          )
        })}
      </div>
    </div>
  </section>
)

const UnderconstructionNotice = () => (
  <h1 style={{
    fontSize: "2rem",
    textAlign: "center",
    color: "yellow",
    border: "5px dashed yellow",
    backgroundColor: "indianred",
    padding: "1rem",
    alignSelf: "flex-start",
    transform: "translate(-2%, 30%) rotateZ(-45deg)"
  }}>
    <span style={{ fontSize: "3rem"}}>
      ⚠️
    </span>
    <br />
    Under construction
  </h1>
)

export default function Home() {
  return (
    <main style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <UnderconstructionNotice />
      <Intorduction />
      <ReasonsToHireMeOrNotToHireMe />
      <Skills />
      <Experiences />
    </main>
  )
}
