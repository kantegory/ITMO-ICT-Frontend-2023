import { api } from '@/api/instance'
import { AuthApi } from "@/api/authApi"

export const authApi = new AuthApi(api);
