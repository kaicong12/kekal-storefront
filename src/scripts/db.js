import {retrieveImageUrl} from "@/scripts/storage";
import {db} from "@/scripts/firebase";
import { doc, getDoc } from 'firebase/firestore';


export const fetchProducts = async (querySnapshot) => {
    return Promise.all(querySnapshot.docs.map(async (doc) => {
        const motorcycle = doc.data()
        const downloadUrl = await retrieveImageUrl(motorcycle.path)
        return {
            "id": doc.id,
            "brand": motorcycle.brand,
            "model": motorcycle.model,
            "path": motorcycle.path,
            "imageUrl": downloadUrl,
            "year": motorcycle.year,
            // "gear": motorcycle.gear,
            "price": motorcycle.price,
            "engine": motorcycle.engine
        }
    }))
}

export const fetchProductData = async (motorcycleId) => {
    const docRef = doc(db, 'motorcycles', motorcycleId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        const motorcycle = docSnap.data();
        const downloadUrl = await retrieveImageUrl(motorcycle.path);
        return {
            "id": doc.id,
            "brand": motorcycle.brand,
            "model": motorcycle.model,
            "path": motorcycle.path,
            "imageUrl": downloadUrl,
            "year": motorcycle.year,
            // "gear": motorcycle.gear,
            "price": motorcycle.price,
            "engine": motorcycle.engine
        }
    } else {
        console.log("motorcycle not found")
        return null
    }
}