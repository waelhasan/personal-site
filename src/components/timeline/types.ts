export interface IExperience {
    id: string
    title: string
    company: {
        name: string
    },
    from: string
    to: string
    summary: string
    type: string //"BACKEND" | "FONTEND" | "BOTH"
    skills: string[]
    details?: string
}
