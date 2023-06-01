import { storage } from '../config/firebase'
import { ref, uploadBytes } from 'firebase/storage'
import { useEffect, useState } from 'react'

export const Upload = () => {


    const [file, setFile] = useState(null)
    const [image, setImage] = useState(null)
    const uploadImage = async () => {
        if (!file) return
        try {
            const fileRef = ref(storage, `images/${file.name}`)
            await uploadBytes(fileRef, file)
        } catch (err) {
            console.error(err);
        }
    }



    return (
        <div>
            <input onChange={(e) => setFile(e.target.files[0])} type="file" id="image" />
            <button onClick={uploadImage}>Upload File</button>
        </div>
    )
}