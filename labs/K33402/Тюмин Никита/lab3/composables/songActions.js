import usePlayerStore from "../src/pinia/player";

export function useSongActions(props) {
  const playerStore = usePlayerStore()

  function play() {
    playerStore.setCurrentSong(props.song)
  }

  function addToCurrentPlaylist() {
    playerStore.addToPlaylist(props.song)
  }

  return { play, addToCurrentPlaylist }
}