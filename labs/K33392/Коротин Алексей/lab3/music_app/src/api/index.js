import { api } from '@/api/instance'
import { AuthApi } from "@/api/authApi"
import { PlaylistApi } from '@/api/playlistApi';
import { DeezerApi } from '@/api/deezerApi';
import { TrackApi } from './trackApi';

export const authApi = new AuthApi(api);
export const playlistApi = new PlaylistApi(api);
export const deezerApi = new DeezerApi(api);
export const trackApi = new TrackApi(api);