import { db } from '@/firebase/firebase'
import { collection, getDocs, getDoc, doc, setDoc, query, where, arrayUnion, updateDoc } from "firebase/firestore";
import Storage from '@/services/storage'

class DB {
  async index(collectionName, withRefs = [], withLinks = []) {
    const data = []

    let snapshot = await getDocs(collection(db, collectionName))
    for (let doc of snapshot.docs) {
      let nextItem = doc.data()
      nextItem.id = doc.id

      for (let ref of withRefs) {
        getDoc(nextItem[ref]).then(snap => {
          nextItem[ref] = snap.data()
        })
      }
      for (let link of withLinks) {
        let url = await Storage.getUrl(nextItem[link])

        nextItem[link + '_url'] = url
      }

      data.push(nextItem)
    }

    return data
  }

  async find(collectionName, id) {
    let item = await getDoc(doc(db, collectionName, id))

    return item.data()
  }

  async store(collectionName, item, uid) {
    return setDoc(doc(db, collectionName, uid), item)
  }

  async getPlaylists(user_uid) {
    let q

    if (user_uid) {
      q = query(
        collection(db, "playlists"),
        where("is_public", "==", false),
        where('user_uid', '==', user_uid)
      )
    } else {
      q = query(
        collection(db, "playlists"),
        where("is_public", "==", true),
      )
    }

    const snapshot = await getDocs(q)

    let playlists = []

    for (let doc of snapshot.docs) {
      let nextItem = doc.data()
      nextItem.id = doc.id

      let url = await Storage.getUrl(nextItem.cover)
      nextItem['cover_url'] = url

      let songs = []

      for (let song of nextItem.songs) {
        let nextSong = await getDoc(song)
        nextSong = nextSong.data()

        let url = await Storage.getUrl(nextSong['audio'])
        nextSong.audio_url = url

        let artist = await getDoc(nextSong['artist'])
        nextSong.artist = artist.data()

        songs.push(nextSong)
      }

      nextItem.songs = songs

      playlists.push(nextItem)
    }

    return playlists
  }

  async addToFavorite(user_uid, song_id) {
    console.log('uid', user_uid)
    console.log('sid', song_id)
    let q = query(
      collection(db, "playlists"),
      where("is_public", "==", false),
      where('user_uid', '==', user_uid)
    )

    const snapshot = await getDocs(q)

    let favPlaylist = snapshot.docs[0]
    let song = await getDoc(doc(db, 'songs', song_id))

    if (favPlaylist) {
      let playlistRef = doc(db, 'playlists', favPlaylist.id)

      await updateDoc(playlistRef, {
        songs: arrayUnion(song.ref)
      })
    } else {
      await setDoc(doc(db, 'playlists', (Math.random() + 1).toString(36).substring(2)), {
        name: 'Favorite',
        is_public: false,
        user_uid: user_uid,
        cover: 'liked.webp',
        songs: [
          song.ref
        ],
      })
    }
  }
}

export default new DB()