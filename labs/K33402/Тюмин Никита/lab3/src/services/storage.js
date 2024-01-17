import { storage } from '@/firebase/firebase'
import { ref, getDownloadURL } from "firebase/storage";

class Storage {
  async getUrl(filename) {
    return getDownloadURL(ref(storage, filename))
  }
}


export default new Storage