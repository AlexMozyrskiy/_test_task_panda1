type BodyTSType = string | null
type EmailTSType = string | null
type NameTSType = string | null
type IdTSType = number | null
type PostIdTSType = number | null

export type CommentTSType = {           // типы в одном объекте
    body: BodyTSType
    email: EmailTSType
    id: IdTSType
    name: NameTSType
    postId: PostIdTSType
}