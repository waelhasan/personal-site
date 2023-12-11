import MarkdownRenderer from "@/components/MarkdownRenderer";
import { Important } from '@/components/Important';
import info from "../../info"

export default function Home(props: any) {
  const projectData = info.projects.find(project => project.id === props.params.id)
  if (!projectData?.details) return null

  return (
    <main className="
      flex flex-col justify-center items-center
      mx-auto mt-[15rem] mb-[5rem]
    ">
      <Important level={1}>
        <span className='
          px-[2rem] py-[0.5rem]
          border-b-[1px] border-b-solid border-b-[--foreground-rgb-important] rounded-[50%]
        '>
          {projectData.title}
        </span>
      </Important>
      <MarkdownRenderer projectData={projectData} />
    </main>
  )
}
