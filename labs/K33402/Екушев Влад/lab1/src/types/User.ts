import { Device } from './Device'

export interface User {
  id: string
  avatarUrl?: string
  devices: Device[]
  email: string
  password: string
  fullname: string
}
