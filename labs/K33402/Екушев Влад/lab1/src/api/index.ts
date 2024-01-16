import {
  DevicesGetRes,
  DevicesGetReq,
  FavoriteDeviceReq,
  FavoriteDeviceRes,
} from 'src/types/api'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API_URL } from 'src/config/constants'
import { UserLoginReq, UserLoginRes } from 'src/types/api/User'

const baseQuery = fetchBaseQuery({
  baseUrl: API_URL,
})

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ['Device', 'User'],
  endpoints: (builder) => ({
    login: builder.mutation<UserLoginRes, UserLoginReq>({
      query: (body) => ({
        url: '/login',
        method: 'POST',
        body,
      }),
      invalidatesTags: (result, _error, _arg) =>
        result?.success ? [{ type: 'User', id: result.user.id }] : [],
    }),
    getDevices: builder.query<DevicesGetRes, DevicesGetReq>({
      query: () => ({
        url: '/devices',
        method: 'GET',
      }),
      providesTags: (result = { devices: [] }) => [
        'Device',
        ...result.devices.map((device) => ({
          type: 'Device' as const,
          id: device.id,
        })),
      ],
    }),
    getFavoritesDevices: builder.query<DevicesGetRes, DevicesGetReq>({
      query: () => ({
        url: '/devices/favorites',
        method: 'GET',
      }),
      providesTags: (result = { devices: [] }) => [
        'Device',
        ...result.devices.map((device) => ({
          type: 'Device' as const,
          id: device.id,
        })),
      ],
    }),
    toggleFavoriteDevice: builder.mutation<
      FavoriteDeviceRes,
      FavoriteDeviceReq
    >({
      query: ({ id }) => ({
        url: `/devices/${id}/favorite`,
        method: 'GET',
      }),
      invalidatesTags: (_result, _error, arg) => [
        { type: 'Device', id: arg.id },
      ],
    }),
  }),
})

export const {
  useLoginMutation,
  useGetDevicesQuery,
  useGetFavoritesDevicesQuery,
  useToggleFavoriteDeviceMutation,
} = apiSlice
