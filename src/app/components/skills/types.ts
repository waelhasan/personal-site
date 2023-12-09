"use client"

import { ReactNode } from "react"

export interface ISkill {
    title: string
    years?: number
    level?: number
    type?: "BACKEND" | "FRONTEND" | "BOTH"
}

export type FilterComponent = (props: {
    addFilterFn: (key: string, fn: (skills: ISkill) => boolean) => void,
}) => ReactNode
