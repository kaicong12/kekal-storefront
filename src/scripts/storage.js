import {getDownloadURL, ref} from "firebase/storage"
import { storage } from "@/scripts/firebase";

export const retrieveImageUrl = (path) => {
    // getDownloadUrl will not work on empty path
    if (path === "") {
        return null
    }

    const storageRef = ref(storage, path);
    return getDownloadURL(storageRef)
}