export type Task = {
    id: number
    category_id: number
    identidier: string
    title: string
    description: string
    start: string
    end: string
    priority: number
    parent_id: number
    deleted_at: Date
    created_at: Date
    updated_at: Date
}