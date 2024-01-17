export type PostType = {
  id: string
  title: string
  body: string
  authorUsername: string
  likesCount: number
}

export type UserDataType = {
  id: string | undefined
  username: string | undefined
  bio: string | undefined
}

export type SignUpDataType = {
  email: string
  emailVisibility: boolean
  username: string
  password: string
  passwordConfirm: string
}

