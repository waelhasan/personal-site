import matter from 'gray-matter'
import md from 'markdown-it'
import { roboto_flex } from '../app/fonts';
import { IExperience } from './timeline/types';

const MarkdownRenderer = ({ projectData }: { projectData: IExperience }) => {
    if (!projectData?.details) return null
    const { content } = matter(projectData?.details);

    return <div
        className={`
          ${roboto_flex.className}
          w-[80%] max-w-[1200px]
          text-[1.5rem]
          [&_ul]:ml-[2rem]
          
          [&_li>p:first-child]:before:p-[0.5rem] [&_li>p:first-child]:before:ml-[-2.5rem] 
            [&_li>p:first-child]:before:content-['✺'] [&_li>p:first-child]:before:text-[--dark-brown]          
          
          [&_h1]:text-[2.5rem] [&_h2]:text-[2rem] [&_h3]:text-[1.5rem] 
            [&_h1]:underline [&_h2]:underline [&_h3]:underline [&_h4]:underline

          [&_p]:p-[0.5rem]
          [&_code]:italic [&_code]:text-[--foreground-rgb-important]
          
          [&_blockquote]:italic [&_blockquote]:text-justify [&_blockquote]:p-[1.5rem] [&_blockquote]:mx-[-2rem]
            [&_blockquote]:rounded-[4rem] [&_blockquote]:border-solid  
            [&_blockquote]:border-l-[1px] [&_blockquote]:border-l-[--foreground-rgb-important] 
            [&_blockquote]:border-r-[1px] [&_blockquote]:border-r-[--foreground-rgb-important] 
        `}
        dangerouslySetInnerHTML={{ __html: md().render(content) }}
    />
}

export default MarkdownRenderer
