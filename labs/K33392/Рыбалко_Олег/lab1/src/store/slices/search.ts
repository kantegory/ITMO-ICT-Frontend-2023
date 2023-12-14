// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { pb } from '@/constants'
import { UserDataType } from '@/types'
import { AnyAction } from '@reduxjs/toolkit'
import { RecordModel } from 'pocketbase'

export type SearchState = {
  byUsername: UserDataType[]
  byTitle: RecordModel[]
}

const initialState = new Proxy<SearchState>(
  {
    byTitle: [],
    byUsername: [],
  },
  {
    get: (target, name) => (name in target ? target[name] : []),
  }
)

export default function searchReducer(
  state = initialState,
  action
): SearchState {
  switch (action.type) {
    case 'search/username':
      return { ...state, byUsername: action.payload }
    case 'search/title':
      return { ...state, byTitle: action.payload }
    default:
      return state
  }
}

export function searchByUsername(username: string): AnyAction {
  return async function searchByUsernameThunk(dispatch: () => void) {
    const records = await pb.collection('users').getFullList({
      filter: `username~"${username}"`,
      sort: '-created',
    })
    dispatch({ type: 'search/username', payload: records })
  }
}

export function searchByTitle(title: string): AnyAction {
  return async function searchByTitleThunk(dispatch: () => void) {
    const records = await pb.collection('posts').getFullList({
      filter: `title~"${title}"`,
      sort: '-created',
      expand: 'author',
    })
    dispatch({ type: 'search/title', payload: records })
  }
}

