import { useEffect, useState } from 'react'
import { db, auth } from '../config/firebase'
import { getDocs, collection, addDoc, deleteDoc, getDoc, doc, updateDoc } from 'firebase/firestore'

export const Movie = () => {

    const collectionRef = collection(db, 'movies')

    const [moviesList, setMoviesList] = useState([])



    useEffect(() => {
        getMovies()
    }, [])

    const [title, setTitle] = useState('')
    const [releaseData, setReleaseData] = useState('')
    const [description, setDescription] = useState('')
    const [updatedtitle, setUpdatedtitle] = useState('')


    // ADD
    const submitToDb = async () => {
        try {
            await addDoc(collectionRef, { title: title, realseDate: releaseData, describtion: description, userId: auth?.currentUser?.uid })
            getMovies()
        } catch (err) {
            console.error(err);
        }
    }

    // DELETE
    const removeItem = async (id) => {
        const removedId = doc(db, 'movies', id)
        try {
            await deleteDoc(removedId)
            getMovies()
        } catch (err) {
            console.error(err);
        }
    }

    // UPDATE
    const updateItem = async (id) => {
        try {
            const updatedDoc = doc(db, 'movies', id)

            await updateDoc(updatedDoc, { title: updatedtitle })
            getMovies()
        } catch (err) {
            console.error(err);
        }

    }

    // READ
    const getMovies = async () => {
        try {
            const data = await getDocs(collectionRef)
            const filteredData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
            console.log(filteredData);
            setMoviesList(filteredData)
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div>
            <input onChange={(e) => setTitle(e.target.value)} placeholder="Title" type="text" />
            <input onChange={(e) => setReleaseData(e.target.value)} placeholder="Realse Date" type="number" />
            <input onChange={(e) => setDescription(e.target.value)} placeholder="Description" type="text" />

            <button onClick={submitToDb}>Submit to Db</button>

            <table width={'100%'}>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Description</th>
                </tr>
                {moviesList.map((item) => {
                    return (

                        <tr>
                            <td>{item.id}</td>
                            <td>{item.title}</td>
                            <td>{item.describtion}</td>
                            <td style={{ color: 'red' }} onClick={() => removeItem(item.id)}>remove</td>
                            <td>
                                <input onChange={(e) => setUpdatedtitle(e.target.value)} placeholder="new Title" type="text" />
                                <span onClick={() => updateItem(item.id)}>add</span>
                            </td>
                        </tr>


                    )
                })}

            </table>
        </div>
    )
}