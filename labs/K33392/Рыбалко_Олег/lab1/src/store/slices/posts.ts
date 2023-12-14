// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { pb } from '@/constants'
import { PostType } from '@/types'
import { AnyAction } from '@reduxjs/toolkit'

export type PostsState = {
  forYou: Array<PostType>
  following: Array<PostType>
}
const initialState: PostsState = {
  forYou: [],
  following: [],
}

export default function postsReducer(state = initialState, action) {
  switch (action.type) {
    case 'posts/following':
    case 'posts/forYou':
      console.log('got ' + action.type)
      console.log(action.payload)
      return action.payload
    default:
      return state
  }
}

export function fetchForYou(authorId: string): AnyAction {
  return async function fetchForYouThunk(dispatch, getState) {
    const state = getState()
    const posts = await pb.collection('posts').getList(1, 30, {
      sort: '-created',
      filter: `author!="${authorId}"`,
      expand: 'author',
    })
    dispatch({
      type: 'posts/forYou',
      payload: {
        ...state.posts,
        forYou: posts.items.map((el) => {
          return {
            authorUsername: el.expand!.author.username,
            body: el.body,
            title: el.title,
            id: el.id,
            likesCount: 0,
          }
        }),
      },
    })
  }
}

export function fetchFollowing(authorId: string): AnyAction {
  return async function fetchFollowingThunk(dispatch, getState) {
    const state = getState()
    const follows = await pb
      .collection('follows')
      .getFullList({ filter: `follower="${authorId}"` })

    const users: string[] = follows.map((el) => el.followee)
    if (users.length === 0) {
      dispatch({
        type: 'posts/following',
        payload: { ...state.posts, following: [] },
      })
      return
    }
    const posts = await pb.collection('posts').getFullList({
      filter: '(' + users.map((el) => `author="${el}"`).join(' || ') + ')',
      expand: 'author',
      sort: '-created',
    })

    dispatch({
      type: 'posts/following',
      payload: {
        ...state.posts,
        following: posts.map((el) => {
          return {
            authorUsername: el.expand!.author.username,
            body: el.body,
            title: el.title,
            id: el.id,
            likesCount: 0,
          }
        }),
      },
    })
  }
}

