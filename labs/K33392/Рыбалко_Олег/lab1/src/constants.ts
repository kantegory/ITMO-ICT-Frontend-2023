import PocketBase from 'pocketbase'

export const serverBaseURL = 'http://localhost:8090'
export const pb = new PocketBase(serverBaseURL)
pb.autoCancellation(false)

