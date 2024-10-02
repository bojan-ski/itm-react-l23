'use client'
// lib 
import { loginUser } from '@/lib/loginUser'
// utils
import saveUserCredentials from '@/utils/saveUserCredentials'
import refresh from '@/utils/refresh'
import getUserCredentials from '@/utils/getUserCredentials'
// components
import PageHeader from '@/components/PageHeader'
import FormInput from '@/components/FormInput'
import FormBtnContainer from '@/components/FormBtnContainer'


const Login = () => {
    const checkIfUserIsLoggedIn = getUserCredentials()

    if(checkIfUserIsLoggedIn) refresh()

    const handleLoginSubmit = async e => {
        e.preventDefault()

        const username = e.target.elements[0].value
        const password = e.target.elements[1].value

        const response = await loginUser(username, password)
        // console.log(response);

        if (response) {
            console.log('You have successfully logged in');

            saveUserCredentials(username, password, response.accessToken)

            e.target.elements[0].value = ''
            e.target.elements[1].value = ''

            refresh()
        }else{
            throw new Error('some thing went wrong')
        }        
    }


    return (
        <div className='login-page'>
            <PageHeader text='Login' />

            <section className="login-feature">
                <form className="login-form" onSubmit={handleLoginSubmit}>
                    <FormInput name='username' title='Username' type='text' />

                    <FormInput name='password' title='Password' type='password' />

                    <FormBtnContainer btnOne='Login' btnTwo='Cancel' />
                </form>
            </section>

        </div>
    )
}

export default Login