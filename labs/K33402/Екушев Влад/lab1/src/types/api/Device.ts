import { Device } from '../Device'

export type DevicesGetRes = {
  devices: Device[]
}
export type DevicesGetReq = unknown

export type FavoriteDeviceRes = {
  state: boolean
}
export type FavoriteDeviceReq = { id: Device['id'] }
