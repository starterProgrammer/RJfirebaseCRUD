import { useState } from "react"
import { createUserWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import { auth, googleProvider } from '../config/firebase'

export const Auth = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    console.log(auth?.currentUser?.email)
    const signIn = async () => {
        await createUserWithEmailAndPassword(auth, email, password).then((data) => console.log(data)).catch((err) => console.log(err))
    }

    const signInWithGoogle = async () => {
        try {
            await signInWithPopup(auth, googleProvider)
        } catch (error) {
            console.error(error)
        }
    }

    const logOut = async () => {
        try {
            signOut(auth)
        } catch (err) {
            console.error(err);
        }
    }
    return (
        <div>
            <input onChange={(e) => setEmail(e.target.value)} placeholder="Email" type="text" />
            <input onChange={(e) => setPassword(e.target.value)} placeholder="Password " type="text" />
            <button onClick={signIn}>Login</button>
            <button onClick={signInWithGoogle}>Sigin in With Google</button>
            <button onClick={logOut}>Log out</button>
        </div>
    )
}