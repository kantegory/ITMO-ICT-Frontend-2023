// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { pb } from '@/constants'
import { AnyAction } from '@reduxjs/toolkit'
import store from '..'
import { loginAction } from './auth'

const initialState = new Proxy(
  {},
  {
    get: (target, name) => (name in target ? target[name] : {}),
  }
)

export default function usersReducer(state = initialState, action) {
  switch (action.type) {
    case 'users/getByUsername':
      return { ...state, [action.payload.username]: action.payload.data }
    case 'users/updateBio':
    case 'users/create':
    case 'users/auth':
      return { ...state, [action.payload.username]: action.payload }
    default:
      return state
  }
}

export function getByUsername(username: string): AnyAction {
  return async function getByUsernameThunk(dispatch: () => void) {
    const record = await pb
      .collection('users')
      .getFirstListItem(`username="${username}"`)
    dispatch({
      type: 'users/getByUsername',
      payload: { username: username, data: record },
    })
  }
}

export function updateBio(username: string, newBio: string): AnyAction {
  return async function updateBioThunk(
    dispatch: () => void,
    getState: () => object
  ) {
    const state = getState()
    const record = await pb
      .collection('users')
      .update(state.users[username].id, { bio: newBio })
    dispatch({ type: 'users/updateBio', payload: record })
  }
}

export function createUser(data: object): AnyAction {
  return async function createUserThunk(dispatch: () => void) {
    const record = await pb.collection('users').create(data)
    dispatch({ type: 'users/create', payload: record })
    store.dispatch(loginAction({ ...data, id: record.id }))
  }
}

export function authWithPassword(
  username: string,
  password: string
): AnyAction {
  return async function authWithPasswordThunk(dispatch: () => void) {
    const record = await pb
      .collection('users')
      .authWithPassword(username, password)
    dispatch({ type: 'users/auth', payload: record })
    store.dispatch(loginAction({ ...userData, id: model.record.id }))
  }
}

