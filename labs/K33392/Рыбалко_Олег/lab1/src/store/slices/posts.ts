// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { pb } from '@/constants'
import { PostType } from '@/types'
import { AnyAction } from '@reduxjs/toolkit'

export type PostsState = {
  forYou: Array<PostType>
  following: Array<PostType>
  byAuthorId: object
}
const initialState: PostsState = {
  forYou: [],
  following: [],
  byAuthorId: new Object({}),
}

export default function postsReducer(state = initialState, action) {
  switch (action.type) {
    case 'posts/following':
      return { ...state, following: action.payload }
    case 'posts/forYou':
      return { ...state, forYou: action.payload }
    case 'posts/byAuthorId':
      return {
        ...state,
        byAuthorId: {
          ...state.byAuthorId,
          [action.payload.authorId]: action.payload.data,
        },
      }
    case 'posts/publish': {
      const posts = state.byAuthorId[action.payload.author]
      return {
        ...state,
        byAuthorId: {
          ...state.byAuthorId,
          [action.payload.author]:
            posts === undefined ? [action.payload] : [action.payload, ...posts],
        },
      }
    }
    default:
      return state
  }
}

export function fetchForYou(authorId: string): AnyAction {
  return async function fetchForYouThunk(dispatch: () => void) {
    const posts = await pb.collection('posts').getList(1, 30, {
      sort: '-created',
      filter: `author!="${authorId}"`,
      expand: 'author',
    })
    dispatch({
      type: 'posts/forYou',
      payload: posts.items.map((el) => {
        return {
          authorUsername: el.expand!.author.username,
          body: el.body,
          title: el.title,
          id: el.id,
          likesCount: 0,
        }
      }),
    })
  }
}

export function fetchFollowing(authorId: string): AnyAction {
  return async function fetchFollowingThunk(dispatch: () => void) {
    const follows = await pb
      .collection('follows')
      .getFullList({ filter: `follower="${authorId}"` })

    const users: string[] = follows.map((el) => el.followee)
    if (users.length === 0) {
      dispatch({
        type: 'posts/following',
        payload: [],
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
      payload: posts.map((el) => {
        return {
          authorUsername: el.expand!.author.username,
          body: el.body,
          title: el.title,
          id: el.id,
          likesCount: 0,
        }
      }),
    })
  }
}

export function fetchByAuthorId(authorId: string): AnyAction {
  return async function fetchByAuthorIdThunk(dispatch: () => void) {
    const posts = await pb.collection('posts').getFullList({
      filter: `author="${authorId}"`,
      expand: 'author',
      sort: '-created',
    })
    dispatch({
      type: 'posts/byAuthorId',
      payload: {
        authorId: authorId,
        data: posts.map((r) => {
          return {
            id: r.id,
            title: r.title,
            body: r.body,
            authorUsername: r.expand!.author.username,
            likesCount: r.likesCount,
          }
        }),
      },
    })
  }
}

export function publishNewPost(data: object): AnyAction {
  return async function publishNewPostThunk(dispatch: () => void) {
    const record = await pb.collection('posts').create(data)
    dispatch({ type: 'posts/publish', payload: record })
  }
}

