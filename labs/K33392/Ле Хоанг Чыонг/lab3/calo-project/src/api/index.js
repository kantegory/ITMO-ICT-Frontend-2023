import instance from "./instance"
import { AuthApi } from "@/api/authApi"
import { CalculationApi } from '@/api/calculationApi'
import { DiaryApi } from '@/api/diaryApi'


const authApi = new AuthApi(instance);
const calculationApi = new CalculationApi(instance)
const diaryApi = new DiaryApi(instance)
export {
    authApi,
    calculationApi,
    diaryApi
}