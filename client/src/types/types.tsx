
type ModeType = "light" | "dark" | undefined

interface StateType {
    mode: ModeType,
    query: string,
    data: Array<{ title: string, src: string }>
}

interface CommentType {
    _id: string,
    author: string,
    created: Date,
    body: string,
}

export type { ModeType, StateType, CommentType }