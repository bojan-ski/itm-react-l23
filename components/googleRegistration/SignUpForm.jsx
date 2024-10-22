'use client'
import { useRouter } from 'next/navigation'
// lib
import googleRegisterUser from "@/lib/googleRegisterUser"
// utils
import refresh from "@/utils/refresh"
// components
import FormInput from '../FormInput'
import FormBtnContainer from '../FormBtnContainer'
// firebase funcs
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { auth } from '@/app/firebase.config'

const SignUpForm = () => {
    const router = useRouter()

    const handleSignUpUserSubmit = async e => {
        e.preventDefault()

        const enteredUsername = e.target.elements[0].value.trim()
        const enteredEmail = e.target.elements[1].value.trim()
        const enteredPassword = e.target.elements[2].value

        try {
            const response = await createUserWithEmailAndPassword(auth, enteredEmail, enteredPassword)

            if (response) {
                // update user - username
                updateProfile(auth.currentUser, {
                    displayName: enteredUsername
                })

                // success message
                console.log('your account has been created');

                // clear form fields
                e.target.elements[0].value = ''
                e.target.elements[1].value = ''
                e.target.elements[2].value = ''

                // navigate user
                router.push('/')
            }
        } catch (error) {
            console.log(error);                    
        }

        // ------- FIREBASE NIJE OPTIMIZOVAN ZA RAD SA NEXT.JS-OM -------
        // const response = await googleRegisterUser(enteredUsername, enteredEmail, enteredPassword)

        // if (response) {
        //     console.log('You have successfully created you account');

        //     e.target.elements[0].value = ''
        //     e.target.elements[1].value = ''
        //     e.target.elements[2].value = ''

        //     refresh()
        // }else{
        //     throw new Error('You were not able to create an account, some thing went wrong')
        // }
    }

    return (
        <form className="google-registration-form" onSubmit={handleSignUpUserSubmit}>
            <FormInput title='Username' name="signUpUsername" type='text' />

            <FormInput title='Email address' name="signUpEmail" type='email' />

            <FormInput title='Password' name="signUpPassword" type='password' />

            <FormBtnContainer btnOne='Create Account' btnTwo='Cancel' />
        </form>
    )
}

export default SignUpForm