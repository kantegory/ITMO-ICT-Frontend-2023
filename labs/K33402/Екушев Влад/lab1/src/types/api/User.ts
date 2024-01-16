import { User } from '../User'

export type ApiUser = Omit<User, 'devices' | 'password'>

export type UserGetSelfReq = unknown
export type UserGetSelfRes = { user: ApiUser | null }

export type UserLoginReq = { email: string; password: string }
export type UserLoginRes = { user: ApiUser; success: true } | { success: false }
