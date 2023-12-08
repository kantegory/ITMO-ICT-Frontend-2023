import { api } from '@/api/instance'
import { AuthApi } from "@/api/authApi"
import { PlaylistApi } from '@/api/playlistApi';
import { DeezerApi } from '@/api/deezerApi';

export const authApi = new AuthApi(api);
export const playlistApi = new PlaylistApi(api);
export const deezerApi = new DeezerApi(api);
