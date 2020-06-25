
type ModeType = "light" | "dark" | undefined
type DrawerVariantType = "persistent" | "temporary"
type InputType =
    "button" | "checkbox" | "color" | "date" |
    "datetime-local" | "email" | "file" | "hidden" |
    "image" | "month" | "number" | "password" |
    "radio" | "range" | "reset" | "search" |
    "submit" | "tel" | "text" | "time" |
    "url" | "week"

type UserType = {
    _id: string,
    email: string,
    publicName: string,
} | undefined

interface StateType {
    user: UserType,
    whoAmIRequestDone: boolean,
    mode: ModeType,
    query: string,
    data: Array<DataItemType>
}

interface DataItemType { 
    title: string,
    src: string 
}

interface JumboActionType {
    name: string,
    path: string
}
interface JumbotronType {
    img?: string,
    title: string,
    subtitle: string,
    actions?: Array<JumboActionType>,
    onClick?: any,
}

interface DrawerType {
    variant: DrawerVariantType,
}

interface CommentType {
    _id: string,
    author: string,
    created: Date,
    body: string,
}

interface MonsterType {
    title: string,
    src: string,
}

interface ValidationErrorType { 
    error: string, 
    touched: boolean 
}

export type {
    DataItemType,
    UserType,
    ModeType,
    DrawerVariantType,
    InputType,
    DrawerType,
    StateType,
    JumboActionType,
    JumbotronType,
    CommentType,
    MonsterType,
    ValidationErrorType
}