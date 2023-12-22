import instance from "@/api/instance";
import NotesApi from "@/api/capsules.js";
import CapsulesApi from "@/api/capsules.js";
import UsersApi from "@/api/user.js";

const capsulesApi = new CapsulesApi(instance);
const usersApi = new UsersApi(instance);

export {
    capsulesApi,
    usersApi,
}