import { MockHandler } from 'vite-plugin-mock-server'
import { devices } from './devices'
import { Device } from 'src/types/Device'
import { User } from 'src/types/User'
import { UserGetSelfRes, UserLoginReq, UserLoginRes } from 'src/types/api/User'
import { DevicesGetRes, FavoriteDeviceReq } from 'src/types/api'

const API_DELAY = 500

const DEFAULT_USER: User = {
  id: '1',
  devices,
  avatarUrl: '/avatar.png',
  email: 'v.ekushev@vk.team',
  fullname: 'Владислав Екушев',
  password: Buffer.from('nobodyknowsthis').toString('base64'),
}

let user: User | null = null

const mocks: MockHandler[] = [
  {
    pattern: '/api/user',
    handle: (req, res) => {
      if (!user) {
        res.writeHead(401, { 'Content-Type': 'application/json' })
        return setTimeout(
          () => res.end(JSON.stringify({ user: null })),
          API_DELAY
        )
      }

      const result: UserGetSelfRes = {
        user: {
          avatarUrl: user.avatarUrl,
          id: user.id,
          email: user.email,
          fullname: user.fullname,
        },
      }

      res.writeHead(200, { 'Content-Type': 'application/json' })
      setTimeout(() => res.end(JSON.stringify(result)), API_DELAY)
    },
  },
  {
    pattern: '/api/user/logout',
    handle: (req, res) => {
      if (!user) {
        res.writeHead(401, { 'Content-Type': 'application/json' })
        return setTimeout(
          () => res.end(JSON.stringify({ user: null })),
          API_DELAY
        )
      }

      user = null

      res.writeHead(200, { 'Content-Type': 'application/json' })
      setTimeout(() => res.end(JSON.stringify({ success: true })), API_DELAY)
    },
  },
  {
    pattern: '/api/login',
    method: 'POST',
    handle: (req, res) => {
      const credentials = req.body as UserLoginReq
      res.writeHead(200, { 'Content-Type': 'application/json' })

      if (
        credentials.email !== DEFAULT_USER.email ||
        credentials.password !==
          Buffer.from(DEFAULT_USER.password, 'base64').toString('utf-8')
      ) {
        return setTimeout(
          () => res.end(JSON.stringify({ success: false })),
          API_DELAY
        )
      }

      user = DEFAULT_USER
      const result: UserLoginRes = {
        user,
        success: true,
      }

      setTimeout(() => res.end(JSON.stringify(result)), API_DELAY)
    },
  },
  {
    pattern: '/api/devices',
    handle: (req, res) => {
      const result: DevicesGetRes = {
        devices: user ? user.devices : [],
      }

      res.writeHead(200, { 'Content-Type': 'application/json' })
      setTimeout(() => res.end(JSON.stringify(result)), API_DELAY)
    },
  },
  {
    pattern: '/api/devices/favorites',
    handle: (req, res) => {
      const result: DevicesGetRes = {
        devices: user ? user.devices.filter((device) => device.favorite) : [],
      }

      res.writeHead(200, { 'Content-Type': 'application/json' })
      setTimeout(() => res.end(JSON.stringify(result)), API_DELAY)
    },
  },
  {
    pattern: '/api/devices/{id}/favorite',
    handle: (req, res) => {
      const { id } = req.params as FavoriteDeviceReq
      res.writeHead(200, { 'Content-Type': 'application/json' })

      const device = user?.devices.find((e) => e.id === id)
      if (!device) {
        return res.end(
          JSON.stringify({
            error: true,
            message: 'Unknown device',
            status: 400,
          })
        )
      }

      device.favorite = !device.favorite

      setTimeout(
        () => res.end(JSON.stringify({ state: device.favorite })),
        API_DELAY
      )
    },
  },
  {
    pattern: '/api/devices/add',
    handle: (req, res) => {
      const { device } = req.body as { device?: Device }
      res.writeHead(200, { 'Content-Type': 'application/json' })

      if (!device) {
        return res.end(
          JSON.stringify({
            error: true,
            message: 'Missing device',
            status: 400,
          })
        )
      }

      if (!user) {
        return res.end(
          JSON.stringify({
            error: true,
            message: 'Unauthorized',
            status: 401,
          })
        )
      }

      user.devices.push(device)

      res.end(JSON.stringify({ devices: user.devices }))
    },
  },
]

export default mocks
