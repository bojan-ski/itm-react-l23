'use client'
import { useRouter } from "next/navigation"
// lib
import googleLoginUser from "@/lib/googleLoginUser"
// utils
import refresh from "@/utils/refresh"
// firebase funcs
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "@/app/firebase.config"
// components
import FormBtnContainer from "../FormBtnContainer"
import FormInput from "../FormInput"

const SignInForm = () => {
    const router = useRouter()

    const handleLoginSubmit = async e => {
        e.preventDefault()

        const email = e.target.elements[0].value
        const password = e.target.elements[1].value

        const response = await signInWithEmailAndPassword(auth, email, password)

        if (response) {
            // success message
            console.log('You have successfully logged in');

            e.target.elements[0].value = ''
            e.target.elements[1].value = ''

            // navigate user
            router.push('/')
        }

        // ------- FIREBASE NIJE OPTIMIZOVAN ZA RAD SA NEXT.JS-OM -------
        // const response = await googleLoginUser(email, password)

        // if (response) {
        //   console.log('You have successfully logged in');

        //   e.target.elements[0].value = ''
        //   e.target.elements[1].value = ''

        //   refresh()
        // } else {
        //   throw new Error('You were not able to login to the application, something went wrong')
        // }
    }

    return (
        <form className="google-login-form" onSubmit={handleLoginSubmit}>
            <FormInput name='email' title='Email' type='email' />

            <FormInput name='password' title='Password' type='password' />

            <FormBtnContainer btnOne='Login' btnTwo='Cancel' />
        </form>
    )
}

export default SignInForm