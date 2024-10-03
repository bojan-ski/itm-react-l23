'use client'
// lib
import googleRegisterUser from "@/lib/googleRegisterUser"
// utils
import refresh from "@/utils/refresh"
//components
import PageHeader from "@/components/PageHeader"
import FormBtnContainer from "@/components/FormBtnContainer"
import FormInput from "@/components/FormInput"



const GoogleRegistration = () => {
    const handleSignUpUserSubmit = async e => {
        e.preventDefault()

        const enteredUsername = e.target.elements[0].value.trim()
        const enteredEmail = e.target.elements[1].value.trim()
        const enteredPassword = e.target.elements[2].value

        const response = await googleRegisterUser(enteredUsername, enteredEmail, enteredPassword)

        if (response) {
            console.log('You have successfully created you account');

            e.target.elements[0].value = ''
            e.target.elements[1].value = ''
            e.target.elements[2].value = ''

            refresh()
        }else{
            throw new Error('You were not able to create an account, some thing went wrong')
        }
    }

    return (
        <div className="google-registration-page">
            <PageHeader text='Google Create Account' />

            <section className="google-registration-feature">
                <form className="google-registration-form" onSubmit={handleSignUpUserSubmit}>
                    <FormInput title='Username' name="signUpUsername" type='text' />

                    <FormInput title='Email address' name="signUpEmail" type='email' />

                    <FormInput title='Password' name="signUpPassword" type='password' />

                    <FormBtnContainer btnOne='Create Account' btnTwo='Cancel' />
                </form>
            </section>
        </div>
    )
}

export default GoogleRegistration