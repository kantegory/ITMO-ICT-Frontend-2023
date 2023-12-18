import instance from "@/api/instance"
import CapsulesApi from "@/api/capsules.js"
import UsersApi from "@/api/users.js";

const capsulesApi = new CapsulesApi(instance)
const usersApi = new UsersApi(instance)

export {
    capsulesApi,
    usersApi
}
