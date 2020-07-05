
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
    darkMode: boolean | undefined,
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

interface ActionType {
    name: string,
    path: string
}
interface JumbotronType {
    img?: string,
    title: string,
    subtitle: string,
    actions?: Array<ActionType>,
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

interface PostLayoutType {
    id: string,
    title: string,
    subtitle: string,
    body?: string,
    content?: React.ReactElement,
    additional?: any,
}

interface PostType {
    title: string,
    subtitle: string,
    body?: string,
    content?: any,
}

interface FeedLayoutType {
    posts: Array<{
        id: string,
        title: string,
        subtitle: string,
        body?: string,
        content?: React.ReactElement,
        additional?: any,
    }>,
}

interface LandingType {
    user: UserType,
    mode: ModeType,
    setDarkMode: any,
    title: string,
    subtitle: string,
    button: { name: string, path: string },
}

export type {
    DataItemType,
    UserType,
    ModeType,
    DrawerVariantType,
    InputType,
    DrawerType,
    StateType,
    ActionType,
    JumbotronType,
    CommentType,
    MonsterType,
    ValidationErrorType,
    PostLayoutType,
    PostType,
    FeedLayoutType,
    LandingType,
}