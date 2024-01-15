import {
  Device,
  DeviceCapabilityType,
  DeviceState,
  DeviceType,
} from 'src/types/Device'

export const devices: Device[] = [
  {
    type: DeviceType.LIGHT_BULB,
    name: 'Xiaomi Yeelight LED Smart Bulb',
    state: DeviceState.ONLINE,
    capabilities: {
      [DeviceCapabilityType.COLOR_SETTING]: {
        type: DeviceCapabilityType.COLOR_SETTING,
        state: {
          instance: 'hsv',
          value: {
            h: 20,
            s: 0.5,
            v: 50,
          },
        },
      },
      [DeviceCapabilityType.ON_OFF]: {
        type: DeviceCapabilityType.ON_OFF,
        state: {
          instance: 'on',
          value: true,
        },
      },
    },
    id: 'fb99ef24-b12f-454c-83bb-586853e61708',
  },
  {
    type: DeviceType.LIGHT_BULB,
    name: 'Xiaomi Yeelight LED Smart Bulb',
    state: DeviceState.ONLINE,
    capabilities: {
      [DeviceCapabilityType.COLOR_SETTING]: {
        type: DeviceCapabilityType.COLOR_SETTING,
        state: {
          instance: 'hsv',
          value: {
            h: 20,
            s: 0.5,
            v: 50,
          },
        },
      },
      [DeviceCapabilityType.ON_OFF]: {
        type: DeviceCapabilityType.ON_OFF,
        state: {
          instance: 'on',
          value: false,
        },
      },
    },
    id: 'e919319d-053e-438c-8882-1c5882f482e0',
  },
  {
    type: DeviceType.KETTLE,
    name: 'Xiaomi Kettle 2',
    state: DeviceState.ONLINE,
    capabilities: {
      [DeviceCapabilityType.ON_OFF]: {
        type: DeviceCapabilityType.ON_OFF,
        state: {
          instance: 'on',
          value: true,
        },
      },
    },
    id: 'b63aeb5e-cf9c-45ed-81d0-d34d00f55eaa',
  },
  {
    type: DeviceType.THERMOSTAT,
    name: 'Xiaomi Warn Floor',
    state: DeviceState.ONLINE,
    capabilities: {
      [DeviceCapabilityType.ON_OFF]: {
        type: DeviceCapabilityType.ON_OFF,
        state: {
          instance: 'on',
          value: true,
        },
      },
      [DeviceCapabilityType.RANGE]: {
        type: DeviceCapabilityType.RANGE,
        state: [
          {
            instance: 'temperature',
            value: 24,
            range: {
              min: -50,
              max: 50,
              precision: 0.01,
            },
          },
        ],
      },
    },
    id: '5f6294fa-6dcb-4a08-8819-087b7540e62a',
  },
  {
    type: DeviceType.THERMOSTAT,
    name: 'Elgato Eve Degree Connected',
    state: DeviceState.OFFLINE,
    capabilities: {
      [DeviceCapabilityType.ON_OFF]: {
        type: DeviceCapabilityType.ON_OFF,
        state: {
          instance: 'on',
          value: false,
        },
      },
      [DeviceCapabilityType.RANGE]: {
        type: DeviceCapabilityType.RANGE,
        state: [],
      },
    },
    id: 'e8f5496a-8d64-4b15-9064-166beaa82882',
  },
  {
    type: DeviceType.CAMERA_OUTDOOR,
    name: 'D-link Omna 180 Cam',
    state: DeviceState.ONLINE,
    capabilities: {
      [DeviceCapabilityType.VIDEO_STREAM]: {
        type: DeviceCapabilityType.VIDEO_STREAM,
        state: {
          instance: 'get_stream',
          value: {
            protocol: 'hls',
            streamUrl: '',
          },
        },
      },
    },
    id: 'e8f5496a-8d64-4b15-9064-166beaa82881',
  },
]
