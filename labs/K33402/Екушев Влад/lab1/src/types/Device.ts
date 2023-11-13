export enum DeviceType {
  LIGHT_BULB = 'light_bulb',
  KETTLE = 'kettle',
  THERMOSTAT = 'thermostat',
  CAMERA_OUTDOOR = 'camera_outdoor',
}

export enum DeviceState {
  ONLINE,
  OFFLINE,
}

export enum DeviceCapabilityType {
  COLOR_SETTING = 'color_setting',
  ON_OFF = 'on_off',
  RANGE = 'range',
  VIDEO_STREAM = 'video_stream',
}

export type DeviceCapabilityColorSetting = {
  type: DeviceCapabilityType.COLOR_SETTING
  state:
    | {
        instance: 'hsv'
        value: {
          h: number
          s: number
          v: number
        }
      }
    | {
        instance: 'temperature_k'
        value: number
      }
}

export type DeviceCapabilityOnOff = {
  type: DeviceCapabilityType.ON_OFF
  state: {
    instance: 'on'
    value: boolean
  }
}

export type Range = {
  min: number
  max: number
  precision: number
}

type DeviceCapabilityRangeStateBrightness = {
  instance: 'brightness'
  range: Range
  value: number
}

type DeviceCapabilityRangeStateTemperature = {
  instance: 'temperature'
  range: Range
  value: number
}

type DeviceCapabilityRangeStateHumidity = {
  instance: 'humidity'
  range: Range
  value: number
}

export type DeviceCapabilityRange = {
  type: DeviceCapabilityType.RANGE
  state: Array<
    | DeviceCapabilityRangeStateBrightness
    | DeviceCapabilityRangeStateTemperature
    | DeviceCapabilityRangeStateHumidity
  >
}

export type DeviceCapabilityVideoStream = {
  type: DeviceCapabilityType.VIDEO_STREAM
  state: {
    instance: 'get_stream'
    value: {
      streamUrl: string
      protocol: 'hls' | 'mp4'
    }
  }
}

type DeviceCapabilityByType<T extends DeviceCapabilityType> = Extract<
  | DeviceCapabilityColorSetting
  | DeviceCapabilityOnOff
  | DeviceCapabilityRange
  | DeviceCapabilityVideoStream,
  {
    type: T
  }
>

export interface BasicDevice {
  id: string
  name: string
  state: DeviceState
  capabilities: {
    [Type in DeviceCapabilityType]?: DeviceCapabilityByType<Type>
  }
}

export interface Kettle extends BasicDevice {
  type: DeviceType.KETTLE
  capabilities: {
    [DeviceCapabilityType.ON_OFF]: DeviceCapabilityOnOff
  }
}

export interface LightBulb extends BasicDevice {
  type: DeviceType.LIGHT_BULB
  capabilities: {
    [DeviceCapabilityType.ON_OFF]: DeviceCapabilityOnOff
    [DeviceCapabilityType.COLOR_SETTING]: DeviceCapabilityColorSetting
  }
}

export interface Thermostat extends BasicDevice {
  type: DeviceType.THERMOSTAT
  capabilities: {
    [DeviceCapabilityType.ON_OFF]: DeviceCapabilityOnOff
    [DeviceCapabilityType.RANGE]: DeviceCapabilityRange
  }
}

export interface CameraOutdoor extends BasicDevice {
  type: DeviceType.CAMERA_OUTDOOR
  capabilities: {
    [DeviceCapabilityType.VIDEO_STREAM]: DeviceCapabilityVideoStream
  }
}

export type Device = Kettle | LightBulb | Thermostat | CameraOutdoor
