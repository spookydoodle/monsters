// FIXME: Check why using Mode as type in App, Layout and styles/main generates type errors
type Mode = {
    mode: "light" | "dark" | undefined
}

interface StateType {
    mode: Mode,
    query: string,
    data: Array<{ title: string, src: string }>
}

interface CommentType {
    _id: string,
    author: string,
    created: Date,
    body: string,
}

export type { Mode, StateType, CommentType }